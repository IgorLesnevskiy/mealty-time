import React, { useCallback } from "react";

import "./styles.scss";
import TipIcon from "../TipIcon";
import LabelIcon from "../LabelIcon";
import Image from "../Image";
import Price from "../Price";

const DishCard = (props) => {
    const { price, title, image, tip, inFavorite, isLoading } = props;

    const onAddToFavoriteHandler = useCallback((e) => {
        console.log(e);
    }, []);

    return (
        <div>
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
        </div>
    );
};

export default DishCard;
