import { normalize, schema } from "normalizr";

export default function dishesSortersNormalizer(originalData) {
    return normalize(originalData, [dishesSortersSchema]);
}

const LAST_SORTER_ID =
    localStorage && localStorage.lastSorterId
        ? localStorage.lastSorterId
        : "by-title-asc";

const dishesSortersSchema = new schema.Entity(
    "dishesSorters",
    {},
    {
        processStrategy(value, parent, key) {
            return {
                ...value,
                type: "radio",
                name: "sorterDish",
                isChecked: value.id === LAST_SORTER_ID,
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
