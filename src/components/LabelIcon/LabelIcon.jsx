import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LabelIcon.scss";
import { utils } from "../../tools";

const LabelIcon = (props) => {
    const {
        type = "radio",
        name = "",
        id = null,
        isChecked = false,
        onChange = Function.prototype,
        value,
        icon,
    } = props;

    const [uniqueId] = useState(id || utils.getUniqueId());

    return (
        <label className={"label-icon"} htmlFor={uniqueId}>
            <input
                id={uniqueId}
                className={"label-icon__control"}
                type={type}
                name={name}
                checked={isChecked}
                value={value}
                onChange={onChange}
            />
            <span className={"label-icon__content"}>
                <FontAwesomeIcon icon={["fas", icon]} />
            </span>
        </label>
    );
};

export default LabelIcon;
