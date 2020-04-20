import { dishesActions } from "../actions";

const initialState = {
    dishes: {
        entities: {},
        ids: [],
    },
    filters: {
        entities: {},
        ids: [],
    },
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

    return dishesState;
}
