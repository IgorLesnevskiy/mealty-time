import React, { useCallback } from "react";
import isEmpty from "lodash/isEmpty";

import "./FilterBarItem.scss";
import LabelButton from "../LabelButton";

const FilterBarItem = ({
    filterItem = {},
    applyFilter = Function.prototype,
    isMock = false,
}) => {
    const onChangeHandler = useCallback(
        (e) => {
            applyFilter({
                filterId: e.target.value,
            });
        },
        [applyFilter]
    );

    if (isMock) {
        return <MockFilterBarItem />;
    }

    if (isEmpty(filterItem)) {
        return null;
    }

    return (
        <LabelButton
            id={filterItem.id}
            type={filterItem.type}
            name={filterItem.name}
            content={filterItem.content}
            value={filterItem.value}
            isChecked={filterItem.isChecked}
            onChange={onChangeHandler}
        />
    );
};

const MockFilterBarItem = (props) => {
    return <LabelButton isMock={true} />;
};

export default FilterBarItem;
