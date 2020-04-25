import { normalize, schema } from "normalizr";

import constants from "../_constants";

export default function dishesNormalizer(originalData) {
    return normalize(originalData, [dishesSchema]);
}

const FAVORITE_DISHES =
    localStorage && localStorage[constants.storage.FAVORITE_DISHES]
        ? localStorage[constants.storage.FAVORITE_DISHES]
        : [];

const requireDishImage = function (id) {
    try {
        return require(`../../resources/images/dishes/${id}.jpeg`);
    } catch (e) {
        console.log(e.message);

        return "";
    }
};

const dishesSchema = new schema.Entity(
    "dishes",
    {},
    {
        processStrategy(value, parent, key) {
            return {
                ...value,
                favorite: FAVORITE_DISHES.includes(value.id),
                price: {
                    value: Number(value.price),
                    currency: value.currency ? value.currency : "RUB",
                },
                image: {
                    src: value.image ? value.image : requireDishImage(value.id),
                    alt: value.title,
                    title: value.title,
                },
            };
        },
    }
);
