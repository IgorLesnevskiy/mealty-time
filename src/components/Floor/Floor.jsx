import React from "react";
import cn from "classnames";

import "./Floor.scss";

const Floor = (props) => {
    const {
        offsetTop = "small",
        offsetBottom = "small",
        extraClasses = [],
        children,
    } = props;

    return (
        <div
            className={cn("floor", extraClasses)}
            data-offset-top={offsetTop}
            data-offset-bottom={offsetBottom}
        >
            <div className="floor__inner">{children}</div>
        </div>
    );
};

export default Floor;
