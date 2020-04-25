import { normalize, schema } from "normalizr";

import constants from "../_constants";

export default function dishesFiltersNormalizer(originalData) {
    return normalize(originalData, [dishesFiltersSchema]);
}

const LAST_FILTERS_IDS =
    localStorage && localStorage[constants.storage.LAST_FILTERS_IDS]
        ? localStorage[constants.storage.LAST_FILTERS_IDS]
        : ["all"];

const dishesFiltersSchema = new schema.Entity(
    "dishesFilters",
    {},
    {
        processStrategy(value, parent, key) {
            return {
                ...value,
                type: "checkbox",
                name: "filterDish",
                isChecked: LAST_FILTERS_IDS.includes(value.id),
                value: value.id,
                content: getContent(value),
            };
        },
    }
);

function getContent(value) {
    if (value.id === "in-favorites") {
        return {
            type: "icon",
            value: "heart",
        };
    }

    return {
        type: "text",
        value: value.title,
    };
}
