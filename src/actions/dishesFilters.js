import remove from "lodash/remove";
import isEmpty from "lodash/isEmpty";

import filtersData from "../resources/data/filters.json";
import { constants, filtersNormalizer, userStorageController } from "../tools/";
import { SORTERS_APPLY_SORTER } from "./dishesSorters";

export const FILTERS_APPLY_FILTER = "FILTERS_APPLY_FILTER";

export const FILTERS_FETCH_BEGIN = "FILTERS_FETCH_BEGIN";
export const FILTERS_FETCH_SUCCEED = "FILTERS_FETCH_SUCCEED";
export const FILTERS_FETCH_FAILURE = "FILTERS_FETCH_FAILURE";

export const filtersFetch = () => async (dispatch) => {
    dispatch(filtersFetchBegin());

    try {
        const normalizedFilters = await filtersNormalizer(filtersData);

        dispatch(
            filtersFetchSucceed({
                entities: normalizedFilters.entities.filters,
                ids: normalizedFilters.result,
                activeIds: getActiveFilters(normalizedFilters.entities.filters),
            })
        );
    } catch (error) {
        dispatch(
            filtersFetchFailure({
                error: error.message,
            })
        );
    }
};

export const filtersFetchBegin = () => {
    return {
        type: FILTERS_FETCH_BEGIN,
        payload: {},
    };
};

export const filtersFetchSucceed = (dishes) => {
    return {
        type: FILTERS_FETCH_SUCCEED,
        payload: dishes,
    };
};

export const filtersFetchFailure = (params) => {
    const { error } = params;

    return {
        type: FILTERS_FETCH_FAILURE,
        payload: {
            error,
        },
    };
};

export const applyFilter = (params = {}) => {
    const { id = null, isChecked } = params;

    return (dispatch, getState) => {
        const filters = getState().filters;
        const filter = filters.entities[id];
        const newActiveIds = [...filters.activeIds];

        if (isChecked) {
            newActiveIds.push(id);

            if (!isEmpty(filter.exclude)) {
                filter.exclude.forEach((excludeId) =>
                    remove(newActiveIds, (i) => i === excludeId)
                );
            }
        } else {
            remove(newActiveIds, (i) => i === id);
        }

        return userStorageController
            .setItem(constants.storage.LAST_FILTERS_IDS, newActiveIds)
            .then((activeIds) => {
                dispatch({
                    type: FILTERS_APPLY_FILTER,
                    payload: {
                        id,
                        activeIds,
                    },
                });
            });
    };
};

const getActiveFilters = (filters = {}) => {
    return Object.keys(filters).filter((id) => filters[id].isChecked);
};
