import React from "react";

import "./Price.scss";

const Price = () => {
    return (
        <div>
            <div className={"price"}>
                120 <span className={"price__currency"}>руб.</span>
            </div>
        </div>
    );
};

export default Price;
