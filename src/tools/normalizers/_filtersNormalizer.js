import { normalize, schema } from "normalizr";

import constants from "../_constants";
import { userStorageController } from "../index";

export default async function dishesFiltersNormalizer(originalData) {
    const LAST_FILTERS_IDS = (await userStorageController.getItem(
        constants.storage.LAST_FILTERS_IDS
    )) || ["all"];

    return normalize(originalData, [
        new schema.Entity(
            "filters",
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
        ),
    ]);
}

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
