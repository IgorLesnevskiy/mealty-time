import { connect } from "react-redux";
import { filtersActions, sortersActions } from "../../actions";
import { bindActionCreators } from "redux";
import ControlBarItem from "../../components/ControlBarItem";

const POSSIBLE_TYPES = ["filters", "sorters"];

const getApplyCallback = (type) => {
    if (type === "filters") {
        return filtersActions.applyFilter;
    } else if (type === "sorters") {
        return sortersActions.applySorter;
    } else {
        return Function.prototype;
    }
};

const mapStateToProps = (state, ownProps) => {
    const { type, entityItemId } = ownProps;

    if (!POSSIBLE_TYPES.includes(type)) {
        console.error(`Unknown container type ${type}`);
        return {};
    }

    return {
        item: {
            ...state[type].entities[entityItemId],
        },
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { type } = ownProps;

    return bindActionCreators(
        {
            applyCallback: getApplyCallback(type),
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBarItem);
