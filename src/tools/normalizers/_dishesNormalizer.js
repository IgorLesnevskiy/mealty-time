import { normalize, schema } from "normalizr";

import constants from "../_constants";

export default function dishesNormalizer(originalData) {
    return normalize(originalData, [dishesSchema]);
}

const FAVORITE_DISHES =
    localStorage && localStorage[constants.storage.FAVORITE_DISHES]
        ? localStorage[constants.storage.FAVORITE_DISHES]
        : [];

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
                    src: value.image,
                    alt: value.title,
                    title: value.title,
                },
            };
        },
    }
);
