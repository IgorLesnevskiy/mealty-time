import React from "react";
import isEmpty from "lodash/isEmpty";

import "./FilterBarItem.scss";
import LabelButton from "../LabelButton";

const FilterBarItem = ({ filterItem = {}, isMock = false }) => {
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
        />
    );
};

const MockFilterBarItem = (props) => {
    return <LabelButton isMock={true} />;
};

export default FilterBarItem;
