import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skeleton from "react-loading-skeleton";
import cn from "classnames";


import "./LabelButton.scss";
import {utils} from "../../tools";

const LabelButton = (props) => {
    const {
        isMock = false,
        type = "radio",
        name = "",
        id = null,
        isChecked = false,
        onChange = Function.prototype,
        value,
        content,
    } = props;

    const [uniqId] = useState(id || utils.getUniqueId());

    if (isMock) {
        return <MockLabelButton />;
    }

    return (
        <label className={cn(["label-button", `is-${type}`])} htmlFor={uniqId}>
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
    );
};

const MockLabelButton = (props) => {
    return (
        <label className={"label-button"}>
            <Skeleton width={70} height={"100%"} />
        </label>
    );
};

export default LabelButton;
