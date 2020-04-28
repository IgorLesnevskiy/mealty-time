import React from "react";
import Skeleton from "react-loading-skeleton";
import isEmpty from "lodash/isEmpty";

import "./CompoundList.scss";

const CompoundList = (props) => {
    const { data = {}, dishId, isMock = false } = props;

    if (isMock) {
        return <MockCompoundList />;
    }

    if (isEmpty(data)) {
        return null;
    }

    return (
        <ul className={"compound-list"}>
            {Object.keys(data).map((itemDataKey) => {
                return CompoundListItem({
                    key: `${dishId}-compound-item-${itemDataKey}`,
                    itemData: data[itemDataKey],
                });
            })}
        </ul>
    );
};

const CompoundListItem = ({ key, itemData }) => {
    return (
        <React.Fragment key={key}>
            <li className={"compound-list__row"}>
                <div className={"compound-list__description"}>
                    {itemData.description}&nbsp;
                    <span>({itemData.measure})</span>
                </div>
                <div className={"compound-list__measure"}>
                    {itemData.amount}
                </div>
            </li>
        </React.Fragment>
    );
};

const MockCompoundList = () => {
    const data = Array.from({ length: 3 });

    return (
        <ul className={"compound-list"}>
            {data.map((_, key) => {
                return (
                    <React.Fragment key={`mock-compound-item-${key}`}>
                        <li className={"compound-list__row"}>
                            <div className={"compound-list__measure"}>
                                <Skeleton />
                            </div>
                            <div className={"compound-list__description"}>
                                <Skeleton />
                            </div>
                        </li>
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default CompoundList;
