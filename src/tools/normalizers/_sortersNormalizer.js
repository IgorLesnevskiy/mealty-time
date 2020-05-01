import { normalize, schema } from "normalizr";
import constants from "../_constants";
import { userStorageController } from "../index";

export default async function dishesSortersNormalizer(originalData) {
    const LAST_SORTERS_IDS = (await userStorageController.getItem(
        constants.storage.LAST_SORTERS_IDS
    )) || ["by-title-asc"];

    return normalize(originalData, [
        new schema.Entity(
            "sorters",
            {},
            {
                processStrategy(value, parent, key) {
                    return {
                        ...value,
                        type: "radio",
                        name: "sorterDish",
                        isChecked: LAST_SORTERS_IDS.includes(value.id),
                        value: value.id,
                        content: getContent(value),
                    };
                },
            }
        ),
    ]);
}

function getContent(value) {
    return {
        type: "text",
        value: value.title,
    };
}
