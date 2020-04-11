import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TipIcon.scss";

const TipIcon = () => {
    return (
        <div>
            <div className={"tip-icon"}>
                <FontAwesomeIcon
                    icon={["fas", "info-circle"]}
                ></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default TipIcon;
