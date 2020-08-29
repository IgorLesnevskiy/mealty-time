import remove from "lodash/remove";

import sortersData from "../../resources/data/sorters.json";
import {
    constants,
    sortersNormalizer,
    userStorageController,
} from "../../tools/";

export const SORTERS_APPLY_SORTER = "SORTERS_APPLY_SORTER";

export const SORTERS_FETCH_BEGIN = "SORTERS_FETCH_BEGIN";
export const SORTERS_FETCH_SUCCEED = "SORTERS_FETCH_SUCCEED";
export const SORTERS_FETCH_FAILURE = "SORTERS_FETCH_FAILURE";

export const sortersFetch = () => async (dispatch) => {
    dispatch(sortersFetchBegin());

    try {
        const normalizedSorters = await sortersNormalizer(sortersData);

        dispatch(
            sortersFetchSucceed({
                entities: normalizedSorters.entities.sorters,
                ids: normalizedSorters.result,
                activeIds: getActiveSorters(normalizedSorters.entities.sorters),
            })
        );
    } catch (error) {
        dispatch(
            sortersFetchFailure({
                error: error.message,
            })
        );
    }
};

export const sortersFetchBegin = () => {
    return {
        type: SORTERS_FETCH_BEGIN,
        payload: {},
    };
};

export const sortersFetchSucceed = (dishes) => {
    return {
        type: SORTERS_FETCH_SUCCEED,
        payload: dishes,
    };
};

export const sortersFetchFailure = (params) => {
    const { error } = params;

    return {
        type: SORTERS_FETCH_FAILURE,
        payload: {
            error,
        },
    };
};

export const applySorter = (params = {}) => {
    const { id = null, isChecked } = params;

    return (dispatch, getState) => {
        const sorters = getState().sorters;
        const newActiveIds = [...sorters.activeIds];

        sorters.ids.forEach((sorterId) => {
            if (sorterId === id) {
                newActiveIds.push(sorterId);
            } else {
                remove(newActiveIds, (i) => i === sorterId);
            }
        });

        return userStorageController
            .setItem(constants.storage.LAST_SORTERS_IDS, newActiveIds)
            .then((activeIds) => {
                dispatch({
                    type: SORTERS_APPLY_SORTER,
                    payload: {
                        id,
                        activeIds,
                    },
                });
            });
    };
};

const getActiveSorters = (sorters = {}) => {
    return Object.keys(sorters).filter((id) => sorters[id].isChecked);
};
