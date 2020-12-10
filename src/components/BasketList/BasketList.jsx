import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEmpty from "lodash/isEmpty";

import "./BasketList.scss";
import Skeleton from "react-loading-skeleton";

const BasketList = (props) => {
    const { dishes = [], isMock = false, onDishRemoveCallback = Function.prototype } = props;

    const handleDishRemove = useCallback(
        (id) => (e) => {
            e.preventDefault();

            onDishRemoveCallback(id);
        },
        [onDishRemoveCallback]
    );

    if (isMock) {
        return <MockBasketList />;
    }

    if (isEmpty(dishes)) {
        return null;
    }

    return (
        <React.Fragment>
            <ul className={"basket-list"}>
                {dishes.map(function (item) {
                    return (
                        <React.Fragment key={item.id}>
                            <li className={"basket-list__item basket-list-item"}>
                                <div className={"basket-list-item__actions"}>
                                    <a
                                        href="#"
                                        className={"basket-list-item__action basket-list-item__action--close"}
                                        onClick={handleDishRemove(item.id)}>
                                        <FontAwesomeIcon icon={["fas", "rounded-cancel"]} />
                                    </a>
                                </div>

                                <div className={"basket-list-item__title"}>{item.title}</div>
                            </li>
                        </React.Fragment>
                    );
                })}
            </ul>
        </React.Fragment>
    );
};

const MockBasketList = () => {
    const data = Array(3).fill();

    return (
        <ul className={"basket-list"}>
            {data.map(function (_, key) {
                return (
                    <React.Fragment key={`mock-basket-list-item-${key}`}>
                        <li className={"basket-list__item basket-list-item is-mock"}>
                            <Skeleton />
                        </li>
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default BasketList;
