import { dishesActions } from "../actions";

const initialState = {
    entities: [],
    loading: true,
    error: null,
};

export default function dishesReducer(dishes = initialState, action) {
    if (action.type === dishesActions.DISHES_FETCH_BEGIN) {
        return {
            ...dishes,
            loading: true,
        };
    }

    if (action.type === dishesActions.DISHES_FETCH_SUCCEED) {
        return {
            ...dishes,
            entities: action.payload.dishes,
            ids: action.payload.ids,
            loading: false,
        };
    }

    if (action.type === dishesActions.DISHES_FETCH_FAILURE) {
        return {
            ...dishes,
            loading: false,
            error: action.payload.error,
        };
    }

    return dishes;
}
