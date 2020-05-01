import { connect } from "react-redux";
import ControlBar from "../../components/ControlBar";
import { filtersActions, sortersActions } from "../../actions";

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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
