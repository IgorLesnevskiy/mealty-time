import { connect } from "react-redux";
import { dishesActions } from "../actions";
import DishesList from "../components/DishesList";

const mapStateToProps = (state) => {
    return {
        dishes: state.dishedReducer.ids,
        loading: state.dishedReducer.loading,
        error: state.dishedReducer.error,
    };
};

const mapDispatchToProps = {
    dishesFetch: dishesActions.dishesFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesList);
