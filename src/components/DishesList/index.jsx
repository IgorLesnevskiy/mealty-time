import React from "react";

import Dish from "../Dish";

import "./styles.scss";

const DishesList = (props) => {
    const { dishes = [] } = props;

    const dishesMarkup = dishes.map((dish) => {
        return DishListItem({
            key: dish.id,
            dish,
        });
    });

    if (!(dishes && dishes.length)) {
        return <div>Ничего не найдено</div>;
    } else {
        return <div className={"dishes"}>{dishesMarkup}</div>;
    }
};

const DishListItem = ({ key, dish }) => {
    return (
        <React.Fragment key={key}>
            <div className={"dishes__item"} key={dish.id}>
                <Dish
                    title={dish.title}
                    image={dish.image}
                    description={dish.description}
                    price={dish.price}
                    ingredients={dish.ingredients}
                    compoundList={dish.compoundList}
                    tip={dish.tip}
                    inFavorite={dish.inFavorite}
                />
            </div>
        </React.Fragment>
    );
};

export default DishesList;
