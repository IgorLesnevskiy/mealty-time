import { connect } from "react-redux";
import { dishesActions } from "../actions";
import FilterBarItem from "../components/FilterBarItem";

const mapStateToProps = (state, ownProps) => {
    return {
        filterItem: {
            ...state.dishesReducer.filters.entities[ownProps.filterItemId],
        },
    };
};

const mapDispatchToProps = {
    applyFilter: dishesActions.dishesApplyFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBarItem);
