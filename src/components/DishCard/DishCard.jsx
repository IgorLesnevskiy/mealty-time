import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import { Tooltip, withTooltip } from "react-tippy";

import "./DishCard.scss";
import LabelIcon from "../LabelIcon";
import Image from "../Image";
import Price from "../Price";

const IMAGE_MODEL = {
    alt: "",
    title: "",
    src: "",
};

const DishCard = (props) => {
    const {
        isMock = false,
        id,
        price,
        title,
        image = IMAGE_MODEL,
        tip = {},
        favorite = false,
        onFavoriteCallback = Function.prototype,
    } = props;

    const onFavoriteButtonChangeHandler = useCallback(
        (e) => {
            const isChecked = e.target.checked;

            onFavoriteCallback({
                id,
                isChecked,
            });
        },
        [onFavoriteCallback, id]
    );

    if (isMock) {
        return <MockDishCard />;
    }

    return (
        <div className={"dish-card"}>
            <div className={"dish-card__price-line"}>
                {price && (
                    <div className={"dish-card__price"}>
                        <Price value={price.value} />
                    </div>
                )}

                <div className={"dish-card__controls"}>
                    <Tooltip
                        title={"Добавить в Lunch Box!"}
                        position={"left"}
                        theme={"primary"}
                        hideOnClick={false}
                        arrow={true}
                    >
                        <LabelIcon
                            id={`dish-pack-${id}`}
                            type={"checkbox"}
                            name={`dish-pack-${id}`}
                            icon={"food-bank"}
                            value={`dish-pack-${id}`}
                        />
                    </Tooltip>
                </div>
            </div>
            <div className={"dish-card__title"}>
                <h3>{title}</h3>
            </div>
            <div className={"dish-card__image"}>
                <LabelIcon
                    id={`dish-favorite-${id}`}
                    type={"checkbox"}
                    name={`dish-favorite-${id}`}
                    icon={"heart"}
                    value={`dish-favorite-${id}`}
                    isChecked={favorite}
                    onChange={onFavoriteButtonChangeHandler}
                />
                {image && (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        title={image.title}
                    />
                )}
            </div>
        </div>
    );
};

const MockDishCard = (props) => {
    return (
        <div className={"dish-card"}>
            <div className={"dish-card__price-line is-mock"}>
                <Skeleton />
            </div>
            <div className={"dish-card__title"}>
                <h3>
                    <Skeleton count={3} />
                </h3>
            </div>
            <div className={"dish-card__image"}>
                <Skeleton width={"100%"} height={200} />
            </div>
        </div>
    );
};

export default DishCard;
