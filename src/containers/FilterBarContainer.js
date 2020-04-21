import { connect } from "react-redux";
import FilterBar from "../components/FilterBar";

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.dishesReducer.filters.ids,
        loading: state.dishesReducer.loading,
        error: state.dishesReducer.error,
    };
};

export default connect(mapStateToProps, null)(FilterBar);
