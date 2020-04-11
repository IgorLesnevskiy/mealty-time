import React from "react";

import "./Dish.scss";
import LabelIcon from "../LabelIcon/LabelIcon";
import Image from "../Image/Image";
import TipIcon from "../TipIcon/TipIcon";
import CompoundList from "../CompoundList/CompoundList";
import DishCard from "../DishCard/DishCard";

const Dish = () => {
    return (
        <div>
            <div className={"dish"}>
                <div className={"dish__card"}>
                    <DishCard />
                </div>

                <div className={"dish__info"}>
                    <div className={"dish__description"}>
                        Рисовая каша — это великолепное сочетание быстрых и
                        сложных углеводов, которое придаст вам сил и будет
                        обеспечивать энергией на протяжении всего дня. Она
                        содержит низкое количество калорий и отлично
                        воспринимается организмом.
                    </div>

                    <div className={"dish__compound-line"}>
                        <div className={"dish__ingredients-wrapper"}>
                            <div className={"dish__ingredients-title"}>
                                Состав:
                            </div>
                            <div className={"dish__ingredients"}>
                                мука высший сорт, сыр рикотта, шпинат
                                свежемороженный, меланж яичный, масло сливочное
                                82% (пастеризованные сливки), масло оливковое,
                                шалфей, соль.
                            </div>
                        </div>
                        <div className={"dish__compound-list"}>
                            <CompoundList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dish;
