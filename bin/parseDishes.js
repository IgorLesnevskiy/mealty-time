const axios = require("axios");
const cheerio = require("cheerio");
const isEmpty = require("lodash/isEmpty");
const md5 = require("md5");
const fs = require("fs");

const BASE_URL = "https://www.mealty.ru";
const PARSE_URL = `${BASE_URL}/catalog/`;
const SAVE_PATH = `${__dirname}/_parseredData.json`;

parse()
    .then((dishes) => {
        if (isEmpty(dishes)) {
            error("Empty final dishes object");
        }
        saveDishesToJson(dishes);
    })
    .catch((e) => console.error(e));

// *****
class Dish {
    constructor(dish) {
        this.$dish = dish;
    }

    getData() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            ingredients: this.ingredients,
            price: this.price,
            currency: "RUB",
            image: this.image,
            category: this.category,
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
        return Number(
            this.$dish
                .find(".meal-card__price .basket__footer-total-count")
                .text()
        );
    }
    get image() {
        const imageUrl = this.$dish
            .find(".meal-card__photo img")
            .attr("data-fancybox-src");

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

        const amount = Number(
            (weight.amount / 100) * calorificForPortion.amount
        ).toFixed(0);

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

async function loadData() {
    const response = await axios.get(PARSE_URL);

    if (response.status !== 200) {
        error(`Page returned unhandled status code ${response.status}`);
    }

    return response.data;
}

async function parse() {
    const html = await loadData();
    const $ = cheerio.load(html);
    const dishesItems = $(".content-menu .catalog-item[data-product_id]");
    const dishes = [];

    if (!dishesItems.length) {
        error(`Cannot find any dishes on the page`);
    }

    dishesItems.each(function (_, dishNode) {
        const dish = new Dish($(dishNode));
        const processedDish = dish.getData();

        if (!isEmpty(processedDish) && processedDish.category !== "novelty") {
            dishes.push(dish.getData());
        }
    });

    return dishes;
}

function saveDishesToJson(dishes) {
    try {
        fs.writeFileSync(SAVE_PATH, JSON.stringify(dishes, null, "\t"));
    } catch (e) {
        error(e);
    }
}

function normalizeText(text = "") {
    return text.trim().replace(/\s{2,}/g, " ");
}

function normalizeNumber(numberAsText = "") {
    return Number(numberAsText.trim().replace(/,/g, "."));
}

function error(msg) {
    throw new Error(msg);
}
