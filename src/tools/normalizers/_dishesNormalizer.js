import { normalize, schema } from "normalizr";

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
                price: {
                    value: value.price,
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

export default function dishesNormalizer(originalData) {
    return normalize(originalData, [dishesSchema]);
}
