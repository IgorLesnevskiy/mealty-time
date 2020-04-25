import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import isEmpty from "lodash/isEmpty";

import "./styles.scss";
import CompoundList from "../CompoundList";
import DishCard from "../DishCard";
import { utils } from "../../tools";

const Dish = ({ dish = {}, isMock, onFavoriteCallback }) => {
    const {
        price,
        id = null,
        tip,
        title,
        favorite = false,
        image,
        description,
        ingredients,
        foodEnergy,
    } = dish;

    const [uniqId] = useState(id || utils.getUniqueId());

    const dishCardParams = {
        id,
        price,
        tip,
        title,
        favorite,
        image,
        onFavoriteCallback,
    };

    const compoundListParams = {
        data: foodEnergy,
        dishId: uniqId,
    };

    if (isMock) {
        return <MockDish />;
    }

    return (
        <div className={"dish"}>
            <div className={"dish__card"}>
                <DishCard {...dishCardParams} />
            </div>

            <div className={"dish__info"}>
                {description && (
                    <div className={"dish__description"}>{description}</div>
                )}

                <div className={"dish__compound-line"}>
                    {!isEmpty(foodEnergy) && (
                        <div className={"dish__compound-list"}>
                            <CompoundList {...compoundListParams} />
                        </div>
                    )}
                    {ingredients && (
                        <div className={"dish__ingredients-wrapper"}>
                            <div className={"dish__ingredients-title"}>
                                Состав:
                            </div>
                            <div className={"dish__ingredients"}>
                                {ingredients}
                            </div>
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
                        <CompoundList isMock={true} />
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
