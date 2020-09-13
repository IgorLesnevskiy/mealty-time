import { dishesActions } from "../actions";
import { constants } from "../../tools";

import remove from "lodash/remove";
import {DISHES_UPDATE_LUNCH_BOX} from "../actions/dishes";

const initialState = {
    entities: {},
    ids: [],
    favoriteIds: [],
    lunchBoxIds: [],
    searchQueryString: "",
    loading: true,
    error: null,
};

export default function dishes(dishesState = initialState, action) {
    /**
     * Старт загрузки списка блюд
     */
    if (action.type === dishesActions.DISHES_FETCH_BEGIN) {
        return {
            ...dishesState,
            loading: true,
        };
    }

    /**
     * Успешное окончание загрузки списка блюд
     */
    if (action.type === dishesActions.DISHES_FETCH_SUCCEED) {
        return {
            ...dishesState,
            ...action.payload,
            loading: false,
        };
    }

    /**
     * Ошибка при загрузке списка блюд
     */
    if (action.type === dishesActions.DISHES_FETCH_FAILURE) {
        console.error(action.payload.error);

        return {
            ...dishesState,
            loading: false,
            error: action.payload.error,
        };
    }

    /**
     * Поиск по блюдам
     */
    if (action.type === dishesActions.DISHES_SEARCH_QUERY) {
        return {
            ...dishesState,
            searchQueryString: action.payload.query || "",
        };
    }

    /**
     * Обновить Избранное
     */
    if (action.type === dishesActions.DISHES_UPDATE_FAVORITES) {
        const favoriteIds = action.payload.favoriteIds;
        const dishes = { ...dishesState };

        for (let dishId of dishes.ids) {
            dishes.entities[dishId].favorite = favoriteIds.includes(dishId);
        }

        dishes.favoriteIds = favoriteIds;

        return {
            ...dishesState,
            ...dishes,
        };
    }

    /**
     * Обновить Lunch Box
     */
    if (action.type === dishesActions.DISHES_UPDATE_LUNCH_BOX) {
        const lunchBoxIds = action.payload.lunchBoxIds;
        const dishes = { ...dishesState };

        for (let dishId of dishes.ids) {
            dishes.entities[dishId].inLunchBox = lunchBoxIds.includes(dishId);
        }

        dishes.lunchBoxIds = lunchBoxIds;

        return {
            ...dishesState,
            ...dishes,
        };
    }

    return dishesState;
}
