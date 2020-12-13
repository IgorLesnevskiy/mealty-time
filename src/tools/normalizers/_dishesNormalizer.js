import { normalize, schema } from "normalizr";

import constants from "../_constants";
import userStorageController from "../_userStorageController";

export default async function dishesNormalizer(originalData) {
    const FAVORITE_DISHES = (await userStorageController.getItem(constants.storage.FAVORITE_DISHES)) || [];

    const LUNCH_BOX_DISHES = (await userStorageController.getItem(constants.storage.LUNCH_BOX_DISHES)) || [];

    return normalize(originalData, [
        new schema.Entity(
            "dishes",
            {},
            {
                processStrategy(value, parent, key) {
                    return {
                        ...value,
                        favorite: FAVORITE_DISHES.includes(value.id),
                        inLunchBox: LUNCH_BOX_DISHES.includes(value.id),
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
        ),
    ]);
}
