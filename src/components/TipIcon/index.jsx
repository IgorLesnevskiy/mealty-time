import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tippy";

import "./styles.scss";

const TipIcon = (props) => {
    const {
        content = "",
        position = "bottom",
        trigger = "mouseenter",
        icon = "info-circle",
        theme = "primary",
        arrow = true,
    } = props;

    return (
        <div className={"tip-icon"}>
            <Tooltip
                className={"tip-icon__inner"}
                title={content}
                position={position}
                trigger={trigger}
                theme={theme}
                arrow={arrow}
            >
                <FontAwesomeIcon icon={["fas", icon]} />
            </Tooltip>
        </div>
    );
};

export default TipIcon;
