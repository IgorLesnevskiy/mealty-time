import React from "react";

import "./DishesList.scss";
import Dish from "../Dish/Dish";

const DishesList = () => {
    return (
        <div>
            <div className={"dishes"}>
                <div className={"dishes__item"}>
                    <Dish />
                </div>
                <div className={"dishes__item"}>
                    <Dish />
                </div>
                <div className={"dishes__item"}>
                    <Dish />
                </div>
                <div className={"dishes__item"}>
                    <Dish />
                </div>
                <div className={"dishes__item"}>
                    <Dish />
                </div>
            </div>
        </div>
    );
};

export default DishesList;
