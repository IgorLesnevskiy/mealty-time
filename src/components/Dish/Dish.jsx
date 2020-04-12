import React, { useState } from "react";

import "./Dish.scss";
import CompoundList from "../CompoundList/CompoundList";
import DishCard from "../DishCard/DishCard";
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
    } = props;

    const [uniqId] = useState(id || utils.getUniqueId());

    return (
        <div>
            <div className={"dish"}>
                <div className={"dish__card"}>
                    <DishCard
                        price={price}
                        tip={tip}
                        title={title}
                        inFavorite={inFavorite}
                        image={image}
                    />
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
                                <CompoundList data={compoundList} dishId={id} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dish;
