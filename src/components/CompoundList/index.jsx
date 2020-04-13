import React from "react";

import "./styles.scss";

const CompoundList = (props) => {
    const { data, dishId, isLoading = false } = props;

    if (!(data && data.length)) {
        return null;
    }

    const compoundListMarkup = data.map((itemData, key) => {
        return CompoundListItem({ key: `${dishId}-${key}`, itemData });
    });

    return (
        <div>
            <ul className={"compound-list"}>{compoundListMarkup}</ul>
        </div>
    );
};

const CompoundListItem = ({ key, itemData }) => {
    return (
        <React.Fragment key={key}>
            <li className={"compound-list__row"}>
                <div className={"compound-list__measure"}>
                    {itemData.amount}
                </div>
                <div className={"compound-list__description"}>
                    {itemData.description}&nbsp;
                    <span>({itemData.measure})</span>
                </div>
            </li>
        </React.Fragment>
    );
};

export default CompoundList;
