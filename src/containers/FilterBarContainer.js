import { connect } from "react-redux";
// import { dishesActions } from "../actions";
import FilterBar from "../components/FilterBar";

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.dishedReducer.filters.ids,
        loading: state.dishedReducer.loading,
        error: state.dishedReducer.error,
    };
};

export default connect(mapStateToProps, null)(FilterBar);
