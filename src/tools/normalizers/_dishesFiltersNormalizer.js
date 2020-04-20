import { normalize, schema } from "normalizr";

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

const dishesFiltersSchema = new schema.Entity(
    "dishesFilters",
    {},
    {
        processStrategy(value, parent, key) {
            return {
                ...value,
                type: "radio",
                name: "filterDish",
                isChecked: false,
                value: value.id,
                content: getContent(value),
            };
            //     return {
            //         ...value,
            //         price: {
            //             value: value.price,
            //             currency: value.currency ? value.currency : "RUB",
            //         },
            //         image: {
            //             src: value.image ? value.image : requireDishImage(value.id),
            //             alt: value.title,
            //             title: value.title,
            //         },
            //     };
        },
    }
);

// {
//     "id": "a-lot-of-proteins",
//     "type": "sort-asc",
//     "title": "Много белков",
//     "fields": ["foodEnergy.portions_proteins.amount"]
// },

// {
//     type: "radio",
//     id: "foo-bar-baz-1",
//     name: "filterDish",
//     isChecked: false,
//     content: {
//         type: "text",
//         value: "Все блюда",
//     },
//     value: "all",
// },
export default function dishesFiltersNormalizer(originalData) {
    return normalize(originalData, [dishesFiltersSchema]);
}
