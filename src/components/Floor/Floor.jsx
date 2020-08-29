import React from "react";
import cn from "classnames";

import "./Floor.scss";

const Floor = (props) => {
    const {
        offsetTop = "small",
        offsetBottom = "small",
        disableTopBorder = false,
        disableBottomBorder = false,
        fluid = false,
        extraClasses = [],
        children,
    } = props;

    return (
        <div
            className={cn("floor", extraClasses)}
            data-offset-top={offsetTop}
            data-offset-bottom={offsetBottom}
            {...(disableTopBorder && { "data-disable-top-border": true })}
            {...(fluid && { "data-container-fluid": true })}
            {...(disableBottomBorder && { "data-disable-bottom-border": true })}
        >
            <div className="floor__inner">{children}</div>
        </div>
    );
};

export default Floor;
