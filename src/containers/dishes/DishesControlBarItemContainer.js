import { connect } from "react-redux";
import { dishesActions } from "../../actions";
import { bindActionCreators } from "redux";
import ControlBarItem from "../../components/ControlBarItem";

const POSSIBLE_TYPES = ["filters", "sorters"];

const getEntityById = (data, type, id) => {
    if (type === "filters") {
        return data.filters.entities[id];
    } else if (type === "sorters") {
        return data.sorters.entities[id];
    } else {
        return {};
    }
};

const getApplyCallback = (type) => {
    if (type === "filters") {
        return dishesActions.dishesApplyFilter;
    } else if (type === "sorters") {
        return dishesActions.dishesApplySorter;
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
            ...getEntityById(state.dishesReducer, type, entityItemId),
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
