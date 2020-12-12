import React from "react";
import cn from "classnames";

import "./StickyContainer.scss";

const StickyContainer = (props) => {
    const { position = "top", zIndex = null, extraStyles = {} } = props;
    const classes = cn("sticky-container", props.className);

    return (
        <div data-position={position} className={classes} style={{ zIndex: zIndex, ...extraStyles }}>
            {props.children}
        </div>
    );
};

export default StickyContainer;
