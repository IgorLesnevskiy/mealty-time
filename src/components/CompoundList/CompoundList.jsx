import React from "react";

import "./CompoundList.scss";

const compoundRow = ({ key, rowData }) => {
    return (
        <React.Fragment key={key}>
            <li className={"compound-list__row"}>
                <div className={"compound-list__measure"}>{rowData.amount}</div>
                <div className={"compound-list__description"}>
                    {rowData.description}&nbsp;<span>({rowData.measure})</span>
                </div>
            </li>
        </React.Fragment>
    );
};

const CompoundList = (props) => {
    const { data, dishId } = props;

    if (!(data && data.length)) {
        return null;
    }

    return (
        <div>
            <ul className={"compound-list"}>
                {data.map((rowData, key) => {
                    return compoundRow({ key: `${dishId}-${key}`, rowData });
                })}
            </ul>
        </div>
    );
};

export default CompoundList;
