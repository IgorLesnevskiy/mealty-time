import React, { useState, useCallback } from "react";

import Skeleton from "react-loading-skeleton";
import { Tooltip } from "react-tippy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";

import Modal from "../Modal";
import BasketContainer from "../../containers/basket/BasketContainer";

import "./SmallBasket.scss";

// const DICTIONARY = {
//     addToLunchBox: 'Добавьте блюда <br/>в "Lunch Box" для расчета',
//     calculateCapacity: "Расчет БЖУ<br/>выбранных блюд",
// };

const SmallBasket = (props) => {
    const { items = [], isMock = false } = props;
    const itemsCount = items.length;

    const [isModalShown, toggleModalVisibility] = useState(false);

    const handleSmallBasketClick = useCallback(() => {
        toggleModalVisibility(true);
    });

    const handleModalClose = useCallback(() => {
        toggleModalVisibility(false);
    });

    // if (true) {
    //     return <MockSmallBasket />;
    // }
    return (
        <React.Fragment>
            <Tooltip
                title={itemsCount ? "Расчет БЖУ<br/>выбранных блюд" : 'Добавьте блюда <br/>в "Lunch Box" для расчета'}
                position={"left"}
                theme={"primary"}
                hideOnClick={false}
                arrow={true}
                style={{ display: "flex" }}>
                <div
                    className={cn("small-basket", itemsCount ? "is-active" : "")}
                    onClick={itemsCount ? handleSmallBasketClick : Function.prototype}>
                    <div className={"small-basket__description"}>Что я сегодня съем</div>

                    <div className={"small-basket__counter"}>
                        <div className={"small-basket__counter-icon"}>
                            <FontAwesomeIcon icon={["fas", "empty-food-bank"]} />
                        </div>
                        {itemsCount ? <div className={"small-basket__counter-amount"}>{itemsCount}</div> : null}
                    </div>
                </div>
            </Tooltip>

            {isModalShown && <ModalContent onModalCloseCallback={handleModalClose} />}
        </React.Fragment>
    );
};

function ModalContent(props) {
    const { onModalCloseCallback = Function.prototype } = props;

    return (
        <Modal onCloseCallback={onModalCloseCallback} title={"Что я сегодня съем"}>
            <BasketContainer />
        </Modal>
    );
}

function MockSmallBasket() {
    return (
        <React.Fragment>
            <div className={"small-basket is-mock"}>
                <Skeleton count={1} height={"100%"} />
            </div>
        </React.Fragment>
    );
}
export default SmallBasket;
