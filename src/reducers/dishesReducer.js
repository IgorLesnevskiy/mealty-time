import { dishesActions } from "../actions";
import remove from "lodash/remove";

const initialState = {
    dishes: {
        entities: {},
        ids: [],
    },
    filters: {
        entities: {},
        ids: [],
        activeFilterId: "all",
    },
    searchQueryString: "",
    loading: true,
    error: null,
};

export default function dishesReducer(dishesState = initialState, action) {
    if (action.type === dishesActions.DISHES_FETCH_BEGIN) {
        return {
            ...dishesState,
            loading: true,
        };
    }

    if (action.type === dishesActions.DISHES_FETCH_SUCCEED) {
        return {
            ...dishesState,
            dishes: action.payload.dishes,
            filters: action.payload.filters,
            loading: false,
        };
    }

    if (action.type === dishesActions.DISHES_FETCH_FAILURE) {
        console.error(action.payload.error);

        return {
            ...dishesState,
            loading: false,
            error: action.payload.error,
        };
    }

    if (action.type === dishesActions.DISHES_SEARCH_QUERY) {
        return {
            ...dishesState,
            searchQueryString: action.payload.query || "",
        };
    }

    if (action.type === dishesActions.DISHES_APPLY_FILTER) {
        if (!action.payload.filterId) {
            return {
                ...dishesState,
            };
        }

        const filters = { ...dishesState.filters };

        for (let filterId of filters.ids) {
            if (filterId === action.payload.filterId) {
                filters.entities[filterId].isChecked = true;
                filters.activeFilterId = action.payload.filterId;
            } else {
                filters.entities[filterId].isChecked = false;
            }
        }

        return {
            ...dishesState,
            filters,
        };
    }

    return dishesState;
}
