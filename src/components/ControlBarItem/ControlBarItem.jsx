import React, { useCallback } from "react";
import isEmpty from "lodash/isEmpty";

import "./ControlBarItem.scss";
import LabelButton from "../LabelButton";

const ControlBarItem = ({
    item = {},
    applyCallback = Function.prototype,
    isMock = false,
}) => {
    const onChangeHandler = useCallback(
        (e) => {
            applyCallback({
                id: e.target.value,
                isChecked: e.target.checked,
            });
        },
        [applyCallback]
    );

    if (isMock) {
        return <MockFilterBarItem />;
    }

    if (isEmpty(item)) {
        return null;
    }

    return (
        <LabelButton
            id={item.id}
            type={item.type}
            name={item.name}
            content={item.content}
            value={item.value}
            isChecked={item.isChecked}
            onChange={onChangeHandler}
        />
    );
};

const MockFilterBarItem = () => {
    return <LabelButton isMock={true} />;
};

export default ControlBarItem;
