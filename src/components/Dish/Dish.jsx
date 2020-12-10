import React, { useState, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import isEmpty from "lodash/isEmpty";

import "./Dish.scss";
import CompoundList from "../CompoundList";
import DishCard from "../DishCard";
import { utils } from "../../tools";

import { MockContext } from "../../contexts";

const Dish = ({
    dish = {},
    // isMock,
    handleFavoriteCallback,
    handleLunchBoxCallback,
}) => {
    const {
        price,
        id = null,
        tip,
        title,
        favorite = false,
        inLunchBox = false,
        image,
        description,
        ingredients,
        foodEnergy,
    } = dish;

    const dishCardParams = {
        id,
        price,
        tip,
        title,
        favorite,
        inLunchBox,
        image,
        handleFavoriteCallback,
        handleLunchBoxCallback,
    };

    const compoundListParams = {
        data: foodEnergy,
    };

    const isMock = useContext(MockContext);

    if (isMock) {
        return <MockDish />;
    }

    return (
        <div className={"dish"}>
            <div className={"dish__card"}>
                <DishCard {...dishCardParams} />
            </div>

            <div className={"dish__info"}>
                {description && <div className={"dish__description"}>{description}</div>}

                <div className={"dish__compound-line"}>
                    {!isEmpty(foodEnergy) && (
                        <div className={"dish__compound-list"}>
                            <CompoundList {...compoundListParams} />
                        </div>
                    )}
                    {ingredients && (
                        <div className={"dish__ingredients-wrapper"}>
                            <div className={"dish__ingredients-title"}>Состав:</div>
                            <div className={"dish__ingredients"}>{ingredients}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const MockDish = (props) => {
    return (
        <div className={"dish"}>
            <div className={"dish__card"}>
                <DishCard isMock={true} />
            </div>

            <div className={"dish__info"}>
                <div className={"dish__description"}>
                    <Skeleton count={5} />
                </div>

                <div className={"dish__compound-line"}>
                    <div className={"dish__compound-list"}>
                        <CompoundList />
                    </div>
                    <div className={"dish__ingredients-wrapper"}>
                        <div className={"dish__ingredients-title"}>
                            <Skeleton count={1} />
                        </div>
                        <div className={"dish__ingredients"}>
                            <Skeleton count={5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dish;
