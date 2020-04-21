import { connect } from "react-redux";
import { createSelector } from "reselect";
import { dishesActions } from "../actions";
import DishesList from "../components/DishesList";

const SEARCH_FIELDS = ["title", "description", "ingredients"];
const MINIMAL_SYMBOLS_FOR_SEARCH = 3;

const getSearchQueryString = (state) => state.dishesReducer.searchQueryString;
const getDishes = (state) => state.dishesReducer.dishes;

const getFilteredAndSortingDishesList = createSelector(
    [getSearchQueryString, getDishes],
    (queryString, dishes) => {
        if (queryString.length < MINIMAL_SYMBOLS_FOR_SEARCH) {
            return dishes.ids;
        }

        return dishes.ids.filter(function searchItems(dishId) {
            const dish = dishes.entities[dishId];

            return SEARCH_FIELDS.some((field) => {
                if (!dish[field]) {
                    return false;
                }

                if (typeof dish[field] != "string") {
                    return false;
                }

                return dish[field]
                    .toLowerCase()
                    .includes(queryString.toLowerCase());
            });
        });
    }
);

const mapStateToProps = (state) => {
    return {
        dishes: getFilteredAndSortingDishesList(state),
        loading: state.dishesReducer.loading,
        error: state.dishesReducer.error,
    };
};

const mapDispatchToProps = {
    dishesFetch: dishesActions.dishesFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesList);
