import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import "./ControlBar.scss";

import ControlBarItem from "../ControlBarItem";
import DishesControlBarItemContainer from "../../containers/dishes/DishesControlBarItemContainer";

const ControlBar = (props) => {
    const {
        entitiesIds = [],
        type = "",
        loading = true,
        error = null,
        fetchData = Function.prototype,
        title,
    } = props;

    useEffect(() => {
        fetchData();

        return () => {};
    }, [fetchData]);

    if (loading) {
        return <MockControlBar />;
    }

    if (error) {
        return null;
    }

    return (
        <div className={"control-bar"}>
            {title && <div className={"control-bar__title"}>{title}</div>}
            <div className={"control-bar__items"}>
                {entitiesIds.map((entityItemId) => (
                    <div className={"control-bar__item"} key={entityItemId}>
                        <DishesControlBarItemContainer
                            entityItemId={entityItemId}
                            type={type}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const MockControlBar = () => {
    const data = Array(3).fill();

    return (
        <div className={"control-bar"}>
            <div className={"control-bar__title"}>
                <Skeleton count={1} width={80} />
            </div>
            <div className={"control-bar__items"}>
                {data.map((_, key) => (
                    <div
                        className={"control-bar__item"}
                        key={`mock-control-bar-item-${key}`}
                    >
                        <ControlBarItem isMock={true} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ControlBar;
