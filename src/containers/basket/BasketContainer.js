import { connect } from "react-redux";
import { createSelector } from "reselect";

import { dishesActions } from "../../store/actions";

import Basket from "../../components/Basket";

const mapStateToProps = (state) => {
    return {
        // items: state.dishes.lunchBoxIds,
        dishes: lunchBoxDishesSelector(state),
        commonFoodEnergy: commonFoodEnergySelector(state),
        loading: state.dishes.loading,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeDishFromBasket: (id) =>
            dispatch(
                dishesActions.dishesToggleLunchBox({
                    id,
                    isChecked: false,
                })
            ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);

const getLunchBoxIds = (state) => state.dishes.lunchBoxIds;
const getDishes = (state) => state.dishes.entities;

const lunchBoxDishesSelector = createSelector([getLunchBoxIds, getDishes], function (ids, dishes) {
    return ids.map(getDishById).filter(Boolean);

    //******
    function getDishById(id) {
        return dishes[id] || null;
    }
});

const commonFoodEnergySelector = createSelector([lunchBoxDishesSelector], function (dishes) {
    return dishes.reduce(combineFoodEnergy, {});

    //******
    function combineFoodEnergy(commonFoodEnergy, dish) {
        const foodEnergyKeys = Object.keys(dish.foodEnergy);

        for (let key of foodEnergyKeys) {
            const energyEntity = dish.foodEnergy[key];

            if (commonFoodEnergy[key]) {
                commonFoodEnergy[key].amount = roundNumber(
                    Number(commonFoodEnergy[key].amount) + Number(energyEntity.amount)
                );

                continue;
            }

            commonFoodEnergy[key] = { ...energyEntity };
        }

        return commonFoodEnergy;
    }

    function roundNumber(n) {
        return Number(n.toFixed(2));
    }
});
