import React, { useState } from "react";

import "./styles.scss";
import CompoundList from "../CompoundList";
import DishCard from "../DishCard";
import { utils } from "../../tools";

const Dish = (props) => {
    const {
        price,
        id = null,
        tip,
        title,
        inFavorite = false,
        image,
        description,
        ingredients,
        compoundList,
        isLoading = false,
    } = props;

    const [uniqId] = useState(id || utils.getUniqueId());

    const dishCardParams = {
        price,
        tip,
        title,
        inFavorite,
        image,
        isLoading,
    };

    const compoundListParams = {
        data: compoundList,
        dishId: uniqId,
        isLoading,
    };

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
                    {compoundList && compoundList.length && (
                        <div className={"dish__compound-list"}>
                            <CompoundList {...compoundListParams} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dish;
