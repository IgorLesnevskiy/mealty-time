import { dishesActions } from "../actions";
import { constants } from "../tools";

import isEmpty from "lodash/isEmpty";
import remove from "lodash/remove";

const initialState = {
    dishes: {
        entities: {},
        ids: [],
        favoriteIds: [],
    },
    filters: {
        entities: {},
        ids: [],
        activeIds: [],
    },
    sorters: {
        entities: {},
        ids: [],
        activeIds: ["by-title-asc"],
    },
    searchQueryString: "",
    loading: true,
    error: null,
};

export default function dishesReducer(dishesState = initialState, action) {
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
            dishes: action.payload.dishes,
            filters: action.payload.filters,
            sorters: action.payload.sorters,
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
     * Применить фильтр к списку блюд
     */
    if (action.type === dishesActions.DISHES_APPLY_FILTER) {
        const { id, isChecked } = action.payload;
        const filters = { ...dishesState.filters };
        const filter = filters.entities[id];

        if (isEmpty(filter)) {
            return {
                ...dishesState,
            };
        }

        filters.entities[id].isChecked = isChecked;

        if (isChecked) {
            filters.activeIds.push(id);

            if (!isEmpty(filter.exclude)) {
                filter.exclude.forEach(function (excludeId) {
                    filters.entities[excludeId].isChecked = false;
                    remove(filters.activeIds, (i) => i === excludeId);
                });
            }
        } else {
            remove(filters.activeIds, (i) => i === id);
        }

        localStorage[constants.storage.LAST_FILTERS_IDS] = JSON.stringify([
            ...filters.activeIds,
        ]);

        return {
            ...dishesState,
            filters,
        };
    }

    /**
     * Применить сортировку к списку блюд
     */
    if (action.type === dishesActions.DISHES_APPLY_SORTER) {
        const id = action.payload.id;
        const sorters = { ...dishesState.sorters };

        if (isEmpty(sorters.entities[id])) {
            return {
                ...dishesState,
            };
        }

        for (let sorterId of sorters.ids) {
            if (sorterId === id) {
                sorters.entities[sorterId].isChecked = true;
                sorters.activeIds.push(sorterId);
            } else {
                sorters.entities[sorterId].isChecked = false;
                remove(sorters.activeIds, (i) => i === sorterId);
            }
        }

        localStorage[constants.storage.LAST_SORTERS_IDS] = JSON.stringify([
            ...sorters.activeIds,
        ]);

        return {
            ...dishesState,
            sorters,
        };
    }

    /**
     * Добавить блюдо в Избранное
     */
    if (action.type === dishesActions.DISHES_ADD_TO_FAVORITES) {
        const { id } = action.payload;
        const dishes = { ...dishesState.dishes };

        if (!id || dishes.favoriteIds.includes(id)) {
            return {
                ...dishesState,
            };
        }

        dishes.favoriteIds.push(id);
        dishes.entities[id].favorite = true;

        localStorage[constants.storage.FAVORITE_DISHES] = JSON.stringify([
            ...dishes.favoriteIds,
            id,
        ]);

        return {
            ...dishesState,
            dishes,
        };
    }

    /**
     * Удалить блюдо из Избранного
     */
    if (action.type === dishesActions.DISHES_REMOVE_FROM_FAVORITES) {
        const { id } = action.payload;
        const dishes = { ...dishesState.dishes };

        if (!id || !dishes.favoriteIds.includes(id)) {
            return {
                ...dishesState,
            };
        }

        dishes.entities[id].favorite = false;
        dishes.favoriteIds = remove(dishes.favoriteIds, id);

        localStorage[constants.storage.FAVORITE_DISHES] = JSON.stringify([
            ...dishes.favoriteIds,
        ]);

        return {
            ...dishesState,
            dishes,
        };
    }

    return dishesState;
}
