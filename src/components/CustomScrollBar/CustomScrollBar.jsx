import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import deepmerge from "deepmerge";
import cn from "classnames";

const DEFAULT_OPTIONS = {
    className: "os-theme-dark",
};

function CustomScrollBarComponent(props) {
    const options = deepmerge(DEFAULT_OPTIONS, props.extraOptions || {});
    const classes = cn(props.className, {
        "os-host-flexbox": !!props.flexMode,
    });

    return (
        <OverlayScrollbarsComponent className={classes} options={options}>
            {props.children}
        </OverlayScrollbarsComponent>
    );
}

export default CustomScrollBarComponent;
