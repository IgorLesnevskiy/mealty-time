import { connect } from "react-redux";
// import { dishesActions } from "../actions";
import Dish from "../components/Dish";

const mapStateToProps = (state, ownProps) => {
    return {
        dish: state.dishedReducer.entities[ownProps.dishId],
    };
};

export default connect(mapStateToProps, null)(Dish);
