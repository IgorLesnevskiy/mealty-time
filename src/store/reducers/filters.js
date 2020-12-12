import { filtersActions } from "../actions";

const initialState = {
    entities: {},
    ids: [],
    activeIds: [],
    loading: true,
    error: null,
};

export default function filters(filtersState = initialState, action) {
    /**
     * Старт загрузки списка блюд
     */
    if (action.type === filtersActions.FILTERS_FETCH_BEGIN) {
        return {
            ...filtersState,
            loading: true,
        };
    }

    /**
     * Успешное окончание загрузки списка блюд
     */
    if (action.type === filtersActions.FILTERS_FETCH_SUCCEED) {
        return {
            ...filtersState,
            ...action.payload,
            loading: false,
        };
    }

    /**
     * Ошибка при загрузке списка блюд
     */
    if (action.type === filtersActions.FILTERS_FETCH_FAILURE) {
        console.error(action.payload.error);

        return {
            ...filtersState,
            loading: false,
            error: action.payload.error,
        };
    }

    /**
     * Применить фильтр к списку блюд
     */
    if (action.type === filtersActions.FILTERS_APPLY_FILTER) {
        const activeIds = action.payload.activeIds;
        const filters = { ...filtersState };

        for (let filterId of filters.ids) {
            filters.entities[filterId].isChecked = activeIds.includes(filterId);
        }

        filters.activeIds = activeIds;

        return {
            ...filtersState,
            ...filters,
        };
    }

    /**
     * Сбросить все фильтры
     */
    if (action.type === filtersActions.FILTERS_RESET_FILTERS) {
        const filters = { ...filtersState };

        for (let filterId of filters.ids) {
            filters.entities[filterId].isChecked = false;
        }

        filters.activeIds = [];

        return {
            ...filtersState,
            ...filters,
        };
    }

    return filtersState;
}
