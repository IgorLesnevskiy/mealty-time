import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";
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

    const [uniqId] = useState(id || utils.getUniqueId());

    return (
        <div>
            <label className={"label-icon"}>
                <input
                    id={uniqId}
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
        </div>
    );
};

export default LabelIcon;
