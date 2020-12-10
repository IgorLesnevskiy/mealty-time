import React from "react";
import isEmpty from "lodash/isEmpty";

import FaviconIcon from "../../resources/images/favicon.svg";

import "./Basket.scss";
import CompoundList from "../CompoundList";
import BasketList from "../BasketList";
import Skeleton from "react-loading-skeleton";

const Basket = (props) => {
    const { commonFoodEnergy = {}, dishes = [], loading = true, removeDishFromBasket = Function.prototype } = props;

    const foodEnergySectionParams = !isEmpty(commonFoodEnergy)
        ? {
              title: "Суммарный расчет БЖУ",
              compoundListParams: {
                  data: commonFoodEnergy,
              },
          }
        : null;

    const dishesSectionParams = !isEmpty(dishes)
        ? {
              title: null,
              basketListParams: {
                  dishes,
                  onDishRemoveCallback: (id) => {
                      removeDishFromBasket(id);
                  },
              },
          }
        : null;

    if (loading) {
        return <MockBasketSections />;
    }

    if (!foodEnergySectionParams && !dishesSectionParams) {
        return <p className={"info-message"}>Корзина пуста</p>;
    }

    return (
        <React.Fragment>
            <div className={"basket"}>
                {dishesSectionParams && (
                    <div className={"basket__section basket-section"}>
                        {dishesSectionParams.title && (
                            <div className={"basket-section__title"}>{dishesSectionParams.title}</div>
                        )}
                        <div className={"basket-section__content"}>
                            <BasketList {...dishesSectionParams.basketListParams} />
                        </div>
                    </div>
                )}

                {foodEnergySectionParams && (
                    <div className={"basket__section basket-section"}>
                        {foodEnergySectionParams.title && (
                            <div className={"basket-section__title"}>{foodEnergySectionParams.title}</div>
                        )}
                        <div className={"basket-section__content"}>
                            <CompoundList {...foodEnergySectionParams.compoundListParams} />
                        </div>
                    </div>
                )}

                <div className={"basket__notes"}>
                    <img src={FaviconIcon} alt={""} />
                    Ммм...
                </div>
            </div>
        </React.Fragment>
    );
};

function MockBasketSections() {
    const data = Array(2).fill();

    return (
        <React.Fragment>
            <div className={"basket"}>
                {data.map((_, key) => {
                    return (
                        <div className={"basket__section basket-section"} key={`mock-basket-section-item-${key}`}>
                            <div className={"basket-section__title"}>
                                <Skeleton />
                            </div>
                            <div className={"basket-section__content"}>
                                <Skeleton count={3} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}

export default Basket;
