import { combineReducers } from "redux";
import dishesReducer from "./dishesReducer";
import filtersReducer from "./dishesReducer";

export default combineReducers({
    dishesReducer,
});
