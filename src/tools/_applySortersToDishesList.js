import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

function applySorters(dishes = [], sorters = []) {
    if (sorters.some(isUnknownSorterType)) {
        return dishes.map(getIds);
    }

    const sorter = sorters[0];
    let sortedDishes = [...dishes];

    if (sorter && !isEmpty(sorter.fields)) {
        sortedDishes = SORTING_STRATEGIES[sorter.sorterType](sortedDishes, sorter);
    }

    return sortedDishes.map(getIds);
}

export default applySorters;

// *****
const SORTING_STRATEGIES = {
    asc: function (dishesList, sorter) {
        const { fields = [] } = sorter;

        if (isEmpty(fields)) {
            return dishesList;
        }

        const fieldForSorting = fields[0];

        return dishesList.sort((a, b) => {
            const fieldA = get(a, fieldForSorting);
            const fieldB = get(b, fieldForSorting);

            return fieldA > fieldB ? 1 : fieldA < fieldB ? -1 : 0;
        });
    },

    desc: function (dishesList, sorter) {
        const { fields = [] } = sorter;

        if (isEmpty(fields)) {
            return dishesList;
        }

        const fieldForSorting = fields[0];

        return dishesList.sort((a, b) => {
            const fieldA = get(a, fieldForSorting);
            const fieldB = get(b, fieldForSorting);

            return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0;
        });
    },
};

function isUnknownSorterType(sorter) {
    if (!SORTING_STRATEGIES[sorter.sorterType]) {
        console.error(`Unknown sorter ${sorter.sorterType}`);

        return true;
    } else {
        return false;
    }
}

function getIds(dish) {
    return dish.id;
}
