import React, { useEffect } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import Dish from "../Dish";
import DishContainer from "../../containers/DishContainer";

import "./DishesList.scss";

const DishesList = (props) => {
    const {
        dishes = [],
        dishesFetch = Function.prototype,
        loading = true,
        error = null,
    } = props;

    useEffect(() => {
        dishesFetch();

        return () => {};
    }, []);

    if (loading) {
        return <MockDishList />;
    }

    if (error) {
        return (
            <div className={"error-message"}>
                Во время загрузки списка произошла ошибка
            </div>
        );
    }

    if (!Object.values(dishes).length || error) {
        return <div className={"info-message"}>Нет блюд для отображения</div>;
    }

    return (
        <div className={"dishes"}>
            {dishes.map((dishId) => (
                <div className={"dishes__item"} key={dishId}>
                    <DishContainer dishId={dishId} />
                </div>
            ))}
        </div>
    );
};

const MockDishList = () => {
    const data = Array.from({ length: 3 });

    return (
        <div className={"dishes"}>
            {data.map((_, key) => {
                return (
                    <div
                        className={"dishes__item"}
                        key={`mock-dish-list-item-${key}`}
                    >
                        <Dish isMock={true} />
                    </div>
                );
            })}
        </div>
    );
};

export default DishesList;
