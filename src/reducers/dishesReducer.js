import { dishesActions } from "../actions";
import isEmpty from "lodash/isEmpty";
import remove from "lodash/remove";

const initialState = {
    dishes: {
        entities: {},
        ids: [],
    },
    filters: {
        entities: {},
        ids: [],
        activeFiltersIds: [],
    },
    sorters: {
        entities: {},
        ids: [],
        activeSortersIds: ["by-title-asc"],
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
        const removeFromActiveIds = (id) =>
            remove(filters.activeFiltersIds, (i) => i === id);
        const addToActiveIds = (id) => filters.activeFiltersIds.push(id);
        const setFilterStatus = (id, v) => (filters.entities[id].isChecked = v);

        if (isEmpty(filter)) {
            return {
                ...dishesState,
            };
        }

        setFilterStatus(id, isChecked);

        if (isChecked) {
            addToActiveIds(id);

            if (!isEmpty(filter.exclude)) {
                filter.exclude.forEach(function (excludeId) {
                    setFilterStatus(excludeId, false);
                    removeFromActiveIds(excludeId);
                });
            }
        } else {
            removeFromActiveIds(id);
        }

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
                sorters.activeSortersIds.push(sorterId);
            } else {
                sorters.entities[sorterId].isChecked = false;
                remove(sorters.activeSortersIds, (i) => i === sorterId);
            }
        }

        return {
            ...dishesState,
            sorters,
        };
    }

    return dishesState;
}
