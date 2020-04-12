import React, { useState } from "react";
import { utils } from "../../tools/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LabelButton.scss";

const LabelButton = (props) => {
    const {
        type = "radio",
        name = "",
        id = null,
        isChecked = false,
        onChange = Function.prototype,
        value,
        content,
    } = props;

    const [uniqId] = useState(id || utils.getUniqueId());

    return (
        <div>
            <label className={"label-button"}>
                <input
                    id={uniqId}
                    className={"label-button__control"}
                    type={type}
                    name={name}
                    checked={isChecked}
                    value={value}
                    onChange={onChange}
                />

                <span className={"label-button__content"}>
                    {content.type === "text" ? (
                        content.value
                    ) : (
                        <FontAwesomeIcon icon={["fas", content.value]} />
                    )}
                </span>
            </label>
        </div>
    );
};

export default LabelButton;
