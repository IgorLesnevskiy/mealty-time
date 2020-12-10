import remove from "lodash/remove";

import dishesData from "../../resources/data/dishes.json";
import { constants, dishesNormalizer, userStorageController } from "../../tools/";

export const DISHES_FETCH_BEGIN = "DISHES_FETCH_BEGIN";
export const DISHES_FETCH_SUCCEED = "DISHES_FETCH_SUCCEED";
export const DISHES_FETCH_FAILURE = "DISHES_FETCH_FAILURE";
export const DISHES_SEARCH_QUERY = "DISHES_SEARCH_QUERY";
export const DISHES_UPDATE_FAVORITES = "DISHES_UPDATE_FAVORITES";
export const DISHES_UPDATE_LUNCH_BOX = "DISHES_UPDATE_LUNCH_BOX";

export const dishesFetch = () => async (dispatch) => {
    dispatch(dishesFetchBegin());

    try {
        const normalizedDishes = await dishesNormalizer(dishesData);

        dispatch(
            dishesFetchSucceed({
                entities: normalizedDishes.entities.dishes,
                ids: normalizedDishes.result,
                favoriteIds: getFavoriteIds(normalizedDishes.entities.dishes),
                lunchBoxIds: getLunchBoxIds(normalizedDishes.entities.dishes),
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

export const dishesFetchSucceed = (dishes) => {
    return {
        type: DISHES_FETCH_SUCCEED,
        payload: dishes,
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

export const dishesToggleFavorite = (params = {}) => {
    const { id = null, isChecked } = params;

    return (dispatch, getStore) => {
        const dishes = getStore().dishes;
        const newFavoriteIds = [...dishes.favoriteIds];

        if (isChecked) {
            newFavoriteIds.push(id);
        } else {
            remove(newFavoriteIds, (i) => i === id);
        }

        return userStorageController.setItem(constants.storage.FAVORITE_DISHES, newFavoriteIds).then((favoriteIds) => {
            dispatch({
                type: DISHES_UPDATE_FAVORITES,
                payload: {
                    id,
                    favoriteIds,
                },
            });
        });
    };
};

export const dishesToggleLunchBox = (params = {}) => {
    const { id = null, isChecked } = params;

    return (dispatch, getStore) => {
        const dishes = getStore().dishes;
        const newLunchBoxIds = [...dishes.lunchBoxIds];

        if (isChecked) {
            newLunchBoxIds.push(id);
        } else {
            remove(newLunchBoxIds, (i) => i === id);
        }

        return userStorageController.setItem(constants.storage.LUNCH_BOX_DISHES, newLunchBoxIds).then((lunchBoxIds) => {
            dispatch({
                type: DISHES_UPDATE_LUNCH_BOX,
                payload: {
                    id,
                    lunchBoxIds,
                },
            });
        });
    };
};

const getFavoriteIds = (dishes = []) => {
    return Object.keys(dishes).filter((id) => {
        return dishes[id].favorite;
    });
};

const getLunchBoxIds = (dishes = []) => {
    return Object.keys(dishes).filter((id) => {
        return dishes[id].inLunchBox;
    });
};
