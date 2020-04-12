import React from "react";

import Dish from "../Dish/Dish";

import "./DishesList.scss";

const DishesList = (props) => {
    const { dishes = [] } = props;

    if (!(dishes && dishes.length)) {
        return <div>Ничего не найдено</div>;
    } else {
        return (
            <div className={"dishes"}>
                {dishes.map((dish) => {
                    return (
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
                    );
                })}
            </div>
        );
    }
};

export default DishesList;
