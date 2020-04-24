import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

function applyFilters(dishes = [], filters = []) {
    if (filters.some(isUnknownFilterType)) {
        return dishes.map(getIds);
    }

    let filteredDishes = [...dishes];

    for (let filter of filters) {
        if (isEmpty(filter.fields) || filter.filterExpression === null) {
            continue;
        }

        filteredDishes = FILTERING_STRATEGIES[filter.filterType](
            filteredDishes,
            filter
        );
    }

    return filteredDishes.map(getIds);
}

export default applyFilters;

// *****
const FILTERING_STRATEGIES = {
    exclude: function (dishesList, filter) {
        const { fields = [], filterExpression = null } = filter;
        const applyFilter = getFilterByExpression(filterExpression);

        return dishesList.filter(function (dish) {
            return !fields.some(function (fieldForFiltering) {
                return applyFilter(get(dish, fieldForFiltering));
            });
        });
    },

    include: function (dishesList, filter) {
        const { fields = [], filterExpression = null } = filter;
        const applyFilter = getFilterByExpression(filterExpression);

        return dishesList.filter(function (dish) {
            return fields.some(function (fieldForFiltering) {
                return applyFilter(get(dish, fieldForFiltering));
            });
        });
    },
};

function getFilterByExpression(expression) {
    if (typeof expression == "string") {
        return getStringFilter(expression);
    } else if (typeof expression == "boolean") {
        return getBooleanFilter(expression);
    }
}

function getStringFilter(expression) {
    const re = new RegExp(expression);

    return function (field = "") {
        return re.test(field);
    };
}

function getBooleanFilter(expression) {
    return function (field = "") {
        if (typeof field === "boolean") {
            return field === expression;
        }

        if (typeof field === "string") {
            return expression ? !!field.length : !field.length;
        }

        return false;
    };
}

function isUnknownFilterType(filter) {
    if (!FILTERING_STRATEGIES[filter.filterType]) {
        console.error(`Unknown filter ${filter.filterType}`);

        return true;
    } else {
        return false;
    }
}

function getIds(dish) {
    return dish.id;
}
