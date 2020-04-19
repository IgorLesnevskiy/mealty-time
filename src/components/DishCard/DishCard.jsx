import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";

import "./DishCard.scss";
import TipIcon from "../TipIcon";
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
        dishId,
        price,
        title,
        image = IMAGE_MODEL,
        tip,
        inFavorite,
    } = props;

    const onAddToFavoriteHandler = useCallback((e) => {
        console.log(e);
    }, []);

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

                {tip && tip.content && (
                    <div className={"dish-card__tip"}>
                        <TipIcon
                            content={tip.content}
                            position={tip.position}
                            trigger={tip.trigger}
                        />
                    </div>
                )}
            </div>
            <div className={"dish-card__title"}>
                <h3>{title}</h3>
            </div>
            <div className={"dish-card__image"}>
                {/*<LabelIcon*/}
                {/*    id={addToFavorite.id}*/}
                {/*    type={addToFavorite.type}*/}
                {/*    name={addToFavorite.name}*/}
                {/*    icon={addToFavorite.icon}*/}
                {/*    value={addToFavorite.value}*/}
                {/*    isChecked={inFavorite}*/}
                {/*    onChange={onAddToFavoriteHandler}*/}
                {/*/>*/}
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
