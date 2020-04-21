import { normalize, schema } from "normalizr";

export default function dishesFiltersNormalizer(originalData) {
    return normalize(originalData, [dishesFiltersSchema]);
}

const LAST_FILTER_ID =
    localStorage && localStorage.lastFilterId
        ? localStorage.lastFilterId
        : "all";

const dishesFiltersSchema = new schema.Entity(
    "dishesFilters",
    {},
    {
        processStrategy(value, parent, key) {
            return {
                ...value,
                type: "radio",
                name: "filterDish",
                isChecked: value.id === LAST_FILTER_ID,
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
