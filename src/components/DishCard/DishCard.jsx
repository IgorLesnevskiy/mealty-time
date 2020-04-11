import React from "react";

import "./DishCard.scss";
import TipIcon from "../TipIcon/TipIcon";
import LabelIcon from "../LabelIcon/LabelIcon";
import Image from "../Image/Image";
import Price from "../Price/Price";

const DishCard = () => {
    return (
        <div>
            <div className={"dish-card"}>
                <div className={"dish-card__price-line"}>
                    <div className={"dish-card__price"}>
                        <Price />
                    </div>
                    <div className={"dish-card__tip"}>
                        <TipIcon />
                    </div>
                </div>
                <div className={"dish-card__title"}>
                    <h3>
                        Каша рисовая с соусом из черной смородины и кедровыми
                        орешками
                    </h3>
                </div>
                <div className={"dish-card__image"}>
                    <LabelIcon />
                    <Image />
                </div>
            </div>
        </div>
    );
};

export default DishCard;
