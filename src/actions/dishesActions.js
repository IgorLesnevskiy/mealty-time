import dishesData from "../resources/data/dishes.json";
import filtersData from "../resources/data/filters.json";
import { dishesNormalizer } from "../tools/";

export const DISHES_FETCH_BEGIN = "DISHES_FETCH_BEGIN";
export const DISHES_FETCH_SUCCEED = "DISHES_FETCH_SUCCEED";
export const DISHES_FETCH_FAILURE = "DISHES_FETCH_FAILURE";

export const dishesFetch = () => async (dispatch) => {
    dispatch(dishesFetchBegin());

    try {
        const normalizedDishes = dishesNormalizer(dishesData);

        dispatch(
            dishesFetchSucceed({
                dishes: normalizedDishes.entities.dishes,
                ids: normalizedDishes.result,
            })
        );
    } catch (error) {
        dispatch(
            dishesFetchFailure({
                error: error.message,
            })
        );
    }
};

export const dishesFetchBegin = () => {
    return {
        type: DISHES_FETCH_BEGIN,
        payload: {},
    };
};

export const dishesFetchSucceed = ({ dishes = [], ids }) => {
    return {
        type: DISHES_FETCH_SUCCEED,
        payload: {
            dishes,
            ids,
        },
    };
};

export const dishesFetchFailure = ({ error }) => {
    return {
        type: DISHES_FETCH_FAILURE,
        payload: {
            error,
        },
    };
};
