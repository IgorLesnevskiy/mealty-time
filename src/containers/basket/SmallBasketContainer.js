import { connect } from "react-redux";
import { createSelector } from "reselect";
// import isEmpty from "lodash/isEmpty";
//
// import { dishesActions } from "../../store/actions";
import SmallBasket from "../../components/SmallBasket";

const mapStateToProps = (state) => {
    return {
        items: state.dishes.lunchBoxIds,
        isMock: state.dishes.loading,
    };
};

const mapDispatchToProps = {
    //     dishesFetch: dishesActions.dishesFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallBasket);
