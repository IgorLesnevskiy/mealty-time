import { combineReducers } from "redux";
import dishedReducer from "./dishesReducer";
import filtersReducer from "./dishesReducer";

export default combineReducers({
    dishedReducer,
});
