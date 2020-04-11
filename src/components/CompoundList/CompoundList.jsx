import React from "react";

import "./CompoundList.scss";

const CompoundList = () => {
    return (
        <div>
            <ul className={"compound-list"}>
                <li className={"compound-list__row"}>
                    <div className={"compound-list__measure"}>350</div>
                    <div className={"compound-list__description"}>
                        вес/объем <span>(г/мл)</span>
                    </div>
                </li>
                <li className={"compound-list__row"}>
                    <div className={"compound-list__measure"}>13.6</div>
                    <div className={"compound-list__description"}>
                        бекли <span>(на 100 грамм)</span>
                    </div>
                </li>
                <li className={"compound-list__row"}>
                    <div className={"compound-list__measure"}>19.5</div>
                    <div className={"compound-list__description"}>
                        жиры <span>(на 100 грамм)</span>
                    </div>
                </li>
                <li className={"compound-list__row"}>
                    <div className={"compound-list__measure"}>5.2</div>
                    <div className={"compound-list__description"}>
                        углеводы <span>(на 100 грамм)</span>
                    </div>
                </li>
                <li className={"compound-list__row"}>
                    <div className={"compound-list__measure"}>235</div>
                    <div className={"compound-list__description"}>
                        калорийность <span>(на 100 грамм)</span>
                    </div>
                </li>
                <li className={"compound-list__row"}>
                    <div className={"compound-list__measure"}>470</div>
                    <div className={"compound-list__description"}>
                        общая калорийность <span>(г)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CompoundList;
