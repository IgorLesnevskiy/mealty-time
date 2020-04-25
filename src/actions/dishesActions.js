import dishesData from "../resources/data/dishes.json";
import filtersData from "../resources/data/filters.json";
import sortersData from "../resources/data/sorters.json";
import {
    dishesNormalizer,
    dishesFiltersNormalizer,
    dishesSortersNormalizer,
} from "../tools/";

export const DISHES_FETCH_BEGIN = "DISHES_FETCH_BEGIN";
export const DISHES_FETCH_SUCCEED = "DISHES_FETCH_SUCCEED";
export const DISHES_FETCH_FAILURE = "DISHES_FETCH_FAILURE";
export const DISHES_SEARCH_QUERY = "DISHES_SEARCH_QUERY";
export const DISHES_APPLY_FILTER = "DISHES_APPLY_FILTER";
export const DISHES_APPLY_SORTER = "DISHES_APPLY_SORTER";
export const DISHES_ADD_TO_FAVORITES = "DISHES_ADD_TO_FAVORITES";
export const DISHES_REMOVE_FROM_FAVORITES = "DISHES_REMOVE_FROM_FAVORITES";

export const dishesFetch = () => async (dispatch) => {
    dispatch(dishesFetchBegin());

    try {
        const normalizedDishes = dishesNormalizer(dishesData);
        const normalizedDishesFilters = dishesFiltersNormalizer(filtersData);
        const normalizedDishesSorters = dishesSortersNormalizer(sortersData);

        dispatch(
            dishesFetchSucceed({
                dishes: {
                    entities: normalizedDishes.entities.dishes,
                    ids: normalizedDishes.result,
                    favoriteDishesIds: getFavoriteDishesIds(
                        normalizedDishes.entities.dishes
                    ),
                },
                filters: {
                    entities: normalizedDishesFilters.entities.dishesFilters,
                    ids: normalizedDishesFilters.result,
                    activeFiltersIds: getActiveFilters(
                        normalizedDishesFilters.entities.dishesFilters
                    ),
                },
                sorters: {
                    entities: normalizedDishesSorters.entities.dishesSorters,
                    ids: normalizedDishesSorters.result,
                    activeSortersIds: getActiveSorter(
                        normalizedDishesSorters.entities.dishesSorters
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

export const dishesFetchSucceed = (params) => {
    const { dishes = [], filters = [], sorters = [] } = params;

    return {
        type: DISHES_FETCH_SUCCEED,
        payload: {
            dishes,
            filters,
            sorters,
        },
    };
};

export const dishesFetchFailure = (params) => {
    const { error } = params;

    return {
        type: DISHES_FETCH_FAILURE,
        payload: {
            error,
        },
    };
};

export const dishesSearchQuery = (params = {}) => {
    const { query = "" } = params;

    return {
        type: DISHES_SEARCH_QUERY,
        payload: {
            query,
        },
    };
};

export const dishesApplyFilter = (params = {}) => {
    const { id = null, isChecked } = params;

    return {
        type: DISHES_APPLY_FILTER,
        payload: {
            id,
            isChecked,
        },
    };
};

export const dishesApplySorter = (params = {}) => {
    const { id = null, isChecked } = params;

    return {
        type: DISHES_APPLY_SORTER,
        payload: {
            id,
            isChecked,
        },
    };
};

export const dishesToggleFavorite = (params = {}) => {
    const { id = null, isChecked } = params;

    if (isChecked) {
        return {
            type: DISHES_ADD_TO_FAVORITES,
            payload: {
                id,
            },
        };
    } else {
        return {
            type: DISHES_REMOVE_FROM_FAVORITES,
            payload: {
                id,
            },
        };
    }
};

const getActiveFilters = (filters = {}) => {
    return Object.keys(filters).filter((id) => filters[id].isChecked);
};

const getActiveSorter = (filters = {}) => {
    return Object.keys(filters).filter((id) => filters[id].isChecked);
};

const getFavoriteDishesIds = (dishes = []) => {
    return Object.keys(dishes).filter((id) => dishes[id].favorite);
};
