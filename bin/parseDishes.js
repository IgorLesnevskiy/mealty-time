const axios = require("axios");
const cheerio = require("cheerio");
const isEmpty = require("lodash/isEmpty");
const md5 = require("md5");
const fs = require("fs");
const chalk = require("chalk");

const logger = require("./_logger");

const BASE_URL = "https://www.mealty.ru";
const CATALOG_PATH = `/catalog/`;
const SAVE_PATH = `${__dirname}/_parseredData.json`;

class ParsingController {
    constructor() {
        this.loader = new Loader({
            baseUrl: BASE_URL,
        });

        this.saveJsonPath = SAVE_PATH;
    }

    async parseDishes() {
        const html = await this.loader.get(CATALOG_PATH);

        if (!html) {
            logger.error(`Cannot parse the page`);

            return null;
        }

        const $ = cheerio.load(html);
        const dishesNodes = $(".content-menu .catalog-item[data-product_id]");
        const result = {
            errors: 0,
            skipped: 0,
            parsed: 0,
            dishes: {},
        };
        const newDishesIds = [];

        if (!dishesNodes.length) {
            logger.error(`Cannot find any dishes on the page`);

            return null;
        }

        dishesNodes.each(function (_, dishNode) {
            const dish = new Dish($(dishNode));
            const processedDish = dish.getData();

            logger.info(`Processing dish "${dish.dishCodeName}"`);

            if (isEmpty(processedDish)) {
                logger.error(`Cannot build the dish "${dish.dishCodeName}"`);
                result.errors++;
                return;
            }

            if (processedDish.isNovice) {
                newDishesIds.push(processedDish.id);

                return;
            }

            if (result.dishes[processedDish.id]) {
                result.skipped++;

                logger.error(`The item with codeName "${dish.dishCodeName}" was already added`);

                return;
            }

            result.parsed++;
            result.dishes[processedDish.id] = processedDish;
        });

        for (let newDishId of newDishesIds) {
            if (isEmpty(result.dishes[newDishId])) {
                continue;
            }

            result.dishes[newDishId].isNovice = true;
        }

        return result;
    }

    saveToJson(dishes) {
        try {
            fs.writeFileSync(this.saveJsonPath, JSON.stringify(dishes, null, "\t"));
        } catch (e) {
            logger.error(e);
        }
    }
}

class Loader {
    constructor({ baseUrl = null } = {}) {
        if (!baseUrl) {
            logger.error('You must set the "baseUrl" param in Loader');
        }

        this.baseUrl = baseUrl;
    }

    async get(path) {
        const fullPath = `${this.baseUrl}${path}`;
        const response = await axios.get(fullPath);

        if (response.ok) {
            logger.error(`Got error status when loading ${fullPath}`);
            return null;
        }

        return response.data;
    }
}

class Dish {
    constructor(dish) {
        this.$dish = dish;
    }

    getData() {
        return {
            id: this.id,
            title: this.title,
            created: Number(new Date()),
            description: this.description,
            ingredients: this.ingredients,
            price: this.price,
            currency: "RUB",
            image: this.image,
            category: this.category,
            isNovice: this.isNovice,
            foodEnergy: {
                weight: this.weight,
                portion_proteins: this.proteinsForPortion,
                portion_fats: this.fatsForPortion,
                portion_carbs: this.carbsForPortion,
                portion_calorific: this.calorificForPortion,
                calorific: this.calorific,
            },
        };
    }

    get dishCodeName() {
        return `[${this.id}] ${this.title}`;
    }

    get id() {
        return md5(this.title);
    }
    get title() {
        const name = this.$dish.find(".meal-card__name");
        const subName = this.$dish.find(".meal-card__name-note");

        return normalizeText(`${name.text()} ${subName.text()}`);
    }
    get description() {
        return normalizeText(this.$dish.find(".meal-card__description").text());
    }
    get ingredients() {
        return normalizeText(this.$dish.find(".meal-card__products").text());
    }
    get price() {
        return Number(this.$dish.find(".meal-card__price .basket__footer-total-count").text());
    }
    get image() {
        const imageUrl = this.$dish.find(".meal-card__photo img").attr("data-fancybox-src");

        if (imageUrl) {
            return `${BASE_URL}${imageUrl}`;
        } else {
            return null;
        }
    }

    get weight() {
        const amount = this.$dish.find(".meal-card__weight").text();

        if (!amount) {
            return null;
        }

        return {
            amount: normalizeNumber(amount),
            measure: "г",
            description: "Вес порции",
        };
    }

    get isNovice() {
        return this.category === "novelty";
    }

    get proteinsForPortion() {
        const amount = this.$dish.find(".meal-card__proteins").text();

        if (!amount) {
            return null;
        }

        return {
            amount: normalizeNumber(amount),
            measure: "на 100 г",
            description: "Белки",
        };
    }
    get fatsForPortion() {
        const amount = this.$dish.find(".meal-card__fats").text();

        if (!amount) {
            return null;
        }

        return {
            amount: normalizeNumber(amount),
            measure: "на 100 г",
            description: "Жиры",
        };
    }
    get carbsForPortion() {
        const amount = this.$dish.find(".meal-card__carbohydrates").text();

        if (!amount) {
            return null;
        }

        return {
            amount: normalizeNumber(amount),
            measure: "на 100 г",
            description: "Углеводы",
        };
    }
    get calorificForPortion() {
        const amount = this.$dish.find(".meal-card__calories").text();

        if (!amount) {
            return null;
        }

        return {
            amount: normalizeNumber(amount),
            measure: "на 100 г",
            description: "Калорийность",
        };
    }
    get calorific() {
        const weight = this.weight;
        const calorificForPortion = this.calorificForPortion;

        if (isEmpty(weight) || isEmpty(calorificForPortion)) {
            return null;
        }

        const amount = Number((weight.amount / 100) * calorificForPortion.amount).toFixed(0);

        return {
            amount: amount,
            measure: "ккал",
            description: "Общая калорийность",
        };
    }

    get category() {
        return this.$dish.closest(".landingItem").attr("id");
    }
}

const parser = new ParsingController();

parser.parseDishes().then((result) => {
    if (isEmpty(result.dishes)) {
        logger.error("Got empty dishes list");
    } else {
        parser.saveToJson(Object.values(result.dishes));
    }

    console.log(
        [
            "=================",
            chalk.green(`Parsed successfully: ${result.parsed}`),
            chalk.yellow(`Skipped: ${result.skipped}`),
            chalk.red(`Parsed with errors: ${result.errors}`),
        ].join("\n")
    );
});

// *****

function normalizeText(text = "") {
    return text.trim().replace(/\s{2,}/g, " ");
}

function normalizeNumber(numberAsText = "") {
    return Number(numberAsText.trim().replace(/,/g, "."));
}
