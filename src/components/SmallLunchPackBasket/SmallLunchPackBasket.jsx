import React from 'react';

import './SmallLunchPackBasket.scss'
import {Tooltip} from "react-tippy";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cn from "classnames";

const DICTIONARY = {
    addToLunchBox: "Добавьте блюда <br/>в \"Lunch Box\" для расчета",
    calculateCapacity: "Расчет БЖУ<br/>выбранных блюд",
}

const SmallLunchPackBasket = (props) => {
    const {
        itemsCount = 1,
    } = props;

    return (
        <Tooltip
            title={itemsCount ? DICTIONARY.calculateCapacity : DICTIONARY.addToLunchBox}
            position={"left"}
            theme={"primary"}
            hideOnClick={false}
            arrow={true}
            style={{display: 'flex'}}
        >
            <div className={cn("small-lunch-box-basket", itemsCount ? "is-active" : "")}>
                <div className={'small-lunch-box-basket__description'}>Что я сегодня съем</div>

                <div className={"small-lunch-box-basket__counter"}>
                    <div className={'small-lunch-box-basket__counter-icon'}>
                        <FontAwesomeIcon icon={["fas", 'empty-food-bank']}/>
                    </div>
                    {itemsCount ? (
                        <div className={'small-lunch-box-basket__counter-amount'}>{itemsCount}</div>
                    ) : null}
                </div>
            </div>
        </Tooltip>
    );
};

export default SmallLunchPackBasket;
