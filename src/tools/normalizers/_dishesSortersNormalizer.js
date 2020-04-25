import { normalize, schema } from "normalizr";
import constants from "../_constants";

export default function dishesSortersNormalizer(originalData) {
    return normalize(originalData, [dishesSortersSchema]);
}

const LAST_SORTERS_IDS =
    localStorage && localStorage[constants.storage.LAST_SORTERS_IDS]
        ? localStorage[constants.storage.LAST_SORTERS_IDS]
        : ["by-title-asc"];

const dishesSortersSchema = new schema.Entity(
    "dishesSorters",
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
);

function getContent(value) {
    return {
        type: "text",
        value: value.title,
    };
}
