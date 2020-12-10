import { sortersActions } from "../actions";

const initialState = {
    entities: {},
    ids: [],
    activeIds: ["by-title-asc"],
    loading: true,
    error: null,
};

export default function sorters(sortersState = initialState, action) {
    /**
     * Старт загрузки списка блюд
     */
    if (action.type === sortersActions.SORTERS_FETCH_BEGIN) {
        return {
            ...sortersState,
            loading: true,
        };
    }

    /**
     * Успешное окончание загрузки списка блюд
     */
    if (action.type === sortersActions.SORTERS_FETCH_SUCCEED) {
        return {
            ...sortersState,
            ...action.payload,
            loading: false,
        };
    }

    /**
     * Ошибка при загрузке списка блюд
     */
    if (action.type === sortersActions.SORTERS_FETCH_FAILURE) {
        console.error(action.payload.error);

        return {
            ...sortersState,
            loading: false,
            error: action.payload.error,
        };
    }

    /**
     * Применить фильтр к списку блюд
     */
    if (action.type === sortersActions.SORTERS_APPLY_SORTER) {
        const activeIds = action.payload.activeIds;
        const sorters = { ...sortersState };

        for (let sorterId of sorters.ids) {
            sorters.entities[sorterId].isChecked = activeIds.includes(sorterId);
        }

        sorters.activeIds = activeIds;

        return {
            ...sortersState,
            ...sorters,
        };
    }

    return sortersState;
}
