import { connect } from "react-redux";
import ControlBar from "../../components/ControlBar";

const POSSIBLE_TYPES = ["filters", "sorters"];

const getEntitiesIds = (data, type) => {
    if (type === "filters") {
        return data.filters.ids;
    } else if (type === "sorters") {
        return data.sorters.ids;
    } else {
        return [];
    }
};

const mapStateToProps = (state, ownProps) => {
    const { type = "" } = ownProps;

    if (!POSSIBLE_TYPES.includes(type)) {
        console.error(`Unknown container type ${type}`);
        return {};
    }

    return {
        entitiesIds: getEntitiesIds(state.dishesReducer, type),
        type,
        loading: state.dishesReducer.loading,
        error: state.dishesReducer.error,
    };
};

export default connect(mapStateToProps, null)(ControlBar);
