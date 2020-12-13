import React, { useCallback, useState } from "react";
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

const TOOLTIP_DEFAULT_PARAMS = {
    position: "left",
    theme: "primary",
    hideOnClick: false,
    arrow: true,
    style: { display: "flex" },
};

const DishCard = (props) => {
    const {
        isMock = false,
        id,
        price,
        title,
        isNovice = false,
        image = IMAGE_MODEL,
        tip = {},
        favorite = false,
        inLunchBox = false,
        handleFavoriteCallback = Function.prototype,
        handleLunchBoxCallback = Function.prototype,
    } = props;

    const [isImageLoaded, setImageLoadedStatus] = useState(false);

    const handleFavoriteButtonChange = useCallback(
        (e) => {
            const isChecked = e.target.checked;

            handleFavoriteCallback({
                id,
                isChecked,
            });
        },
        [handleFavoriteCallback, id]
    );

    const handleLunchBoxButtonChange = useCallback(
        (e) => {
            const isChecked = e.target.checked;

            handleLunchBoxCallback({
                id,
                isChecked,
            });
        },
        [handleLunchBoxCallback, id]
    );

    const handleAfterImageLoad = useCallback(() => {
        setImageLoadedStatus(true);
    }, [setImageLoadedStatus]);

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
            </div>
            <div className={"dish-card__title"}>
                <h3>{title}</h3>
            </div>
            <div className={"dish-card__image"}>
                {isImageLoaded && (
                    <div className={"dish-card__controls"}>
                        <div className={"dish-card__control-item"}>
                            <Tooltip
                                {...TOOLTIP_DEFAULT_PARAMS}
                                title={favorite ? "Убрать из Избранного" : "Добавить в Избранное"}>
                                <LabelIcon
                                    id={`dish-favorite-${id}`}
                                    type={"checkbox"}
                                    name={`dish-favorite-${id}`}
                                    icon={"heart"}
                                    value={`dish-favorite-${id}`}
                                    isChecked={favorite}
                                    onChange={handleFavoriteButtonChange}
                                />
                            </Tooltip>
                        </div>
                        <div className={"dish-card__control-item"}>
                            <Tooltip
                                {...TOOLTIP_DEFAULT_PARAMS}
                                title={inLunchBox ? "Убрать из Lunch Box" : "Добавить в Lunch Box"}>
                                <LabelIcon
                                    id={`dish-pack-${id}`}
                                    type={"checkbox"}
                                    name={`dish-pack-${id}`}
                                    icon={"food-bank"}
                                    value={`dish-pack-${id}`}
                                    isChecked={inLunchBox}
                                    onChange={handleLunchBoxButtonChange}
                                />
                            </Tooltip>
                        </div>
                    </div>
                )}

                {image && (
                    <Image src={image.src} alt={image.alt} title={image.title} onAfterLoad={handleAfterImageLoad} />
                )}

                {isNovice && (
                    <div className={"dish-card__label is-novice"}>
                        <div className={"dish-card__label-text"}>NEW</div>
                    </div>
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
