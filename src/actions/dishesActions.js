import dishesData from "../resources/data/dishes.json";
import filtersData from "../resources/data/filters.json";
import { dishesNormalizer, dishesFiltersNormalizer } from "../tools/";

export const DISHES_FETCH_BEGIN = "DISHES_FETCH_BEGIN";
export const DISHES_FETCH_SUCCEED = "DISHES_FETCH_SUCCEED";
export const DISHES_FETCH_FAILURE = "DISHES_FETCH_FAILURE";
export const DISHES_SEARCH_QUERY = "DISHES_SEARCH_QUERY";
export const DISHES_APPLY_FILTER = "DISHES_APPLY_FILTER";

const getActiveFilters = (filters = {}) => {
    return Object.keys(filters)
        .filter((id) => filters[id].isChecked)
        .slice(0, 1)
        .toString();
};

export const dishesFetch = () => async (dispatch) => {
    dispatch(dishesFetchBegin());

    try {
        const normalizedDishes = dishesNormalizer(dishesData);
        const normalizedDishesFilters = dishesFiltersNormalizer(filtersData);

        dispatch(
            dishesFetchSucceed({
                dishes: {
                    entities: normalizedDishes.entities.dishes,
                    ids: normalizedDishes.result,
                },
                filters: {
                    entities: normalizedDishesFilters.entities.dishesFilters,
                    ids: normalizedDishesFilters.result,
                    activeFilterId: getActiveFilters(
                        normalizedDishesFilters.entities.dishesFilters
                    ),
                },
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

export const dishesFetchSucceed = ({ dishes = [], filters = [] }) => {
    return {
        type: DISHES_FETCH_SUCCEED,
        payload: {
            dishes,
            filters,
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

export const dishesSearchQuery = ({ query = "" } = {}) => {
    return {
        type: DISHES_SEARCH_QUERY,
        payload: {
            query,
        },
    };
};
export const dishesApplyFilter = ({ filterId = null } = {}) => {
    return {
        type: DISHES_APPLY_FILTER,
        payload: {
            filterId,
        },
    };
};
