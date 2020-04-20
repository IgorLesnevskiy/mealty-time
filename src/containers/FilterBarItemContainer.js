import { connect } from "react-redux";
// import { dishesActions } from "../actions";
import FilterBarItem from "../components/FilterBarItem";

const mapStateToProps = (state, ownProps) => {
    return {
        filterItem: state.dishedReducer.filters.entities[ownProps.filterItemId],
    };
};

export default connect(mapStateToProps, null)(FilterBarItem);
