import { connect } from "react-redux";
import { createSelector } from "reselect";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

import { dishesActions } from "../actions";
import DishesList from "../components/DishesList";

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

const SEARCH_FIELDS = ["title", "description", "ingredients"];
const MINIMAL_SYMBOLS_FOR_SEARCH = 3;

const SORTING_TYPES = ["sort-asc", "sort-desc"];
const FILTERING_TYPES = ["include", "exclude"];

function sortDishes(dishes, fields = [], type = "") {
    if (!SORTING_TYPES.includes(type)) {
        return dishes;
    }

    if (isEmpty(dishes) || isEmpty(fields)) {
        return [];
    }

    const fieldForSorting = fields.slice(0, 1).toString();
    const isEveryDishHasField = dishes.every(
        (dish) => get(dish, fieldForSorting, null) !== null
    );

    if (!isEveryDishHasField) {
        return dishes;
    }

    return dishes.sort((a, b) => {
        const fieldA = get(a, fieldForSorting);
        const fieldB = get(b, fieldForSorting);

        if (type === "sort-asc") {
            return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0;
        } else {
            return fieldA > fieldB ? 1 : fieldA < fieldB ? -1 : 0;
        }
    });
}

function filterDishes(dishes, fields = [], expression = null, type) {
    if (!FILTERING_TYPES.includes(type) || !expression) {
        debugger;
        return dishes;
    }
    if (isEmpty(dishes) || isEmpty(fields)) {
        return [];
    }

    const re = new RegExp(expression);

    return dishes.filter((dish) => {
        if (type === "include") {
            return fields.some((fieldForFiltering) =>
                re.test(String(get(dish, fieldForFiltering)))
            );
        } else {
            return fields.every((fieldForFiltering) => {
                const foo = get(dish, fieldForFiltering);
                debugger;
                return !re.test(String(foo));
            });
        }
    });
}

const FILTERING_STRATEGIES = {
    "sort-asc": (dishes = [], fields = []) => {
        return sortDishes(dishes, fields, "sort-asc");
    },
    "sort-desc": (dishes = [], fields = []) => {
        return sortDishes(dishes, fields, "sort-desc");
    },
    exclude: (dishes = [], fields = [], expression = null) => {
        return filterDishes(dishes, fields, expression, "exclude");
    },
    include: (dishes = [], fields = [], expression = null) => {
        return filterDishes(dishes, fields, expression, "include");
    },
};

const getSearchQueryString = (state) => state.dishesReducer.searchQueryString;
const getDishes = (state) => state.dishesReducer.dishes;
const getFilters = (state) => state.dishesReducer.filters;

const getFilteredAndSortingDishesList = createSelector(
    [getSearchQueryString, getFilters, getDishes],
    (queryString, filters, dishes) => {
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
            const currentDishes = resultDishesIds.map(getDishEntity);
            const filter = filters.entities[filters.activeFilterId];

            if (!isEmpty(filter)) {
                resultDishesIds = applyFilter(currentDishes, filter);
            }
        }

        return resultDishesIds;

        //*****
        function getDishEntity(id) {
            return dishes.entities[id];
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

function applyFilter(
    dishes = [],
    { filterType = null, filterExpression = null, fields = [] } = {}
) {
    if (!dishes.length) {
        return [];
    }

    if (!(filterType && FILTERING_STRATEGIES[filterType])) {
        return getIds(dishes);
    }

    const filteredDishes = FILTERING_STRATEGIES[filterType](
        dishes,
        fields,
        filterExpression
    );

    console.log(filteredDishes);

    if (filteredDishes) {
        return getIds(filteredDishes);
    } else {
        return getIds(dishes);
    }

    // *****
    function getIds(dishes = []) {
        return dishes.map((dish) => dish.id);
    }
}
