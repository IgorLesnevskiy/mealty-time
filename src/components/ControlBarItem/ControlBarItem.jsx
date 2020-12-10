import React, { useCallback, useContext } from "react";
import isEmpty from "lodash/isEmpty";

import "./ControlBarItem.scss";
import LabelButton from "../LabelButton";
import { MockContext } from "../ControlBar";

const ControlBarItem = ({ item = {}, applyCallback = Function.prototype }) => {
    const onChangeHandler = useCallback(
        (e) => {
            applyCallback({
                id: e.target.value,
                isChecked: e.target.checked,
            });
        },
        [applyCallback]
    );

    const isMock = useContext(MockContext);

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
