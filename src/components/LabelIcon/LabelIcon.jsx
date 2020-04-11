import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LabelIcon.scss";

const LabelIcon = () => {
    return (
        <div>
            <label className={"label-icon"}>
                <input
                    className={"label-icon__control"}
                    type={"checkbox"}
                    name={"foo"}
                    value={3}
                />
                <span className={"label-icon__content"}>
                    <FontAwesomeIcon icon={["fas", "heart"]}></FontAwesomeIcon>
                </span>
            </label>
        </div>
    );
};

export default LabelIcon;
