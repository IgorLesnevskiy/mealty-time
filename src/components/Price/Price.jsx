import React from "react";

import "./Price.scss";

import { utils } from "../../tools";

const currenciesMap = new Map(
    Object.entries({
        RUB: (price = 0) => {
            return (
                <React.Fragment>
                    {utils.convertToLocalPrice(price, "RU")}
                    <span className={"price__currency"}> руб.</span>
                </React.Fragment>
            );
        },
    })
);

const Price = (props) => {
    const { value = 0, currency = "RUB" } = props;

    if (!currenciesMap.has(currency)) {
        return null;
    }

    return <div className={"price"}>{currenciesMap.get(currency)(value)}</div>;
};

export default Price;
