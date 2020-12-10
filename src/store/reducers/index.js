import { combineReducers } from "redux";

import dishes from "./dishes";
import filters from "./filters";
import sorters from "./sorters";

export default combineReducers({
    dishes,
    filters,
    sorters,
});
