import { connect } from "react-redux";
import ControlBar from "../../components/ControlBar";
import { filtersActions, sortersActions } from "../../store/actions";

const POSSIBLE_TYPES = ["filters", "sorters"];

const getFetchDataFunction = (type = "") => {
    if (type === "filters") {
        return filtersActions.filtersFetch;
    } else if (type === "sorters") {
        return sortersActions.sortersFetch;
    } else {
        return Function.prototype;
    }
};

const getResetFunction = (type = "") => {
    if (type === "filters") {
        return filtersActions.resetFilters;
    } else if (type === "sorters") {
        return sortersActions.resetSorters;
    } else {
        return Function.prototype;
    }
};

const mapStateToProps = (state, ownProps) => {
    const { type = "" } = ownProps;

    if (!POSSIBLE_TYPES.includes(type)) {
        console.error(`Unknown container type ${type}`);
        return {};
    }

    return {
        entitiesIds: state[type].ids,
        type,
        loading: state[type].loading,
        error: state[type].error,
        displayResetTrigger: !!state[type].activeIds.length,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { type = "" } = ownProps;

    if (!POSSIBLE_TYPES.includes(type)) {
        console.error(`Unknown container type ${type}`);
        return {};
    }

    return {
        fetchData: () => dispatch(getFetchDataFunction(type)()),
        onResetClick: () => dispatch(getResetFunction(type)()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
