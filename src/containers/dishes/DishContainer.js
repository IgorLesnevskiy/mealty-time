import { connect } from "react-redux";
import { dishesActions } from "../../store/actions";
import Dish from "../../components/Dish";

const mapStateToProps = (state, ownProps) => {
    return {
        dish: {
            ...state.dishes.entities[ownProps.dishId],
        },
    };
};

const mapDispatchToProps = {
    onFavoriteCallback: dishesActions.dishesToggleFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dish);
