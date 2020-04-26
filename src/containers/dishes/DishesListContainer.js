import { connect } from "react-redux";
import { createSelector } from "reselect";
import isEmpty from "lodash/isEmpty";

import { dishesActions } from "../../actions";
import DishesList from "../../components/DishesList";
import {
    applyFiltersToDishesList,
    applySortersToDishesList,
} from "../../tools";

const mapStateToProps = (state) => {
    return {
        dishes: getProcessedDishesList(state),
        loading: state.dishesReducer.loading,
        error: state.dishesReducer.error,
    };
};

const mapDispatchToProps = {
    dishesFetch: dishesActions.dishesFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesList);

const SEARCH_FIELDS = ["title", "description", "ingredients"];
const MINIMAL_SYMBOLS_FOR_SEARCH = 3;

const getSearchQueryString = (state) => state.dishesReducer.searchQueryString;
const getDishes = (state) => state.dishesReducer.dishes;
const getFilters = (state) => state.dishesReducer.filters;
const getSorters = (state) => state.dishesReducer.sorters;

const getProcessedDishesList = createSelector(
    [getSearchQueryString, getFilters, getSorters, getDishes],
    (queryString, filters, sorters, dishes) => {
        let resultDishesIds = dishes.ids;

        {
            if (queryString.length >= MINIMAL_SYMBOLS_FOR_SEARCH) {
                resultDishesIds = searchDishesByQueryString(
                    dishes,
                    queryString
                );
            }
        }

        {
            if (!isEmpty(filters.entities) && !isEmpty(resultDishesIds)) {
                const currentDishes = resultDishesIds.map(getDishEntity);
                const filtersEntities = filters.activeIds.map(getFilterEntity);

                resultDishesIds = applyFiltersToDishesList(
                    currentDishes,
                    filtersEntities
                );
            }
        }

        {
            if (!isEmpty(sorters.entities) && !isEmpty(resultDishesIds)) {
                const currentDishes = resultDishesIds.map(getDishEntity);
                const sortersEntities = sorters.activeIds.map(
                    getSortersEntities
                );

                resultDishesIds = applySortersToDishesList(
                    currentDishes,
                    sortersEntities
                );
            }
        }

        return resultDishesIds;

        //*****
        function getDishEntity(id) {
            return dishes.entities[id];
        }

        function getFilterEntity(id) {
            return filters.entities[id];
        }

        function getSortersEntities(id) {
            return sorters.entities[id];
        }
    }
);

function searchDishesByQueryString(dishes, queryString = "") {
    return dishes.ids.filter(searchInItem);

    // ******
    function searchInItem(dishId) {
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
    }
}
