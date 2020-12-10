import React, { useEffect } from "react";

import Dish from "../Dish";
import DishContainer from "../../containers/dishes/DishContainer";

import "./DishesList.scss";

import { MockContext } from "../../contexts";

const DishesList = (props) => {
    const { dishes = [], dishesFetch = Function.prototype, loading = true, error = null } = props;

    useEffect(() => {
        dishesFetch();

        return () => {};
    }, [dishesFetch]);

    if (loading) {
        return (
            <MockContext.Provider value={true}>
                <MockDishList />
            </MockContext.Provider>
        );
    }

    if (error) {
        return <p className={"error-message"}>Во время загрузки списка произошла ошибка</p>;
    }

    if (!Object.values(dishes).length || error) {
        return <p className={"info-message"}>Нет блюд для отображения</p>;
    }

    return (
        <MockContext.Provider value={false}>
            <div className={"dishes"}>
                {dishes.map((dishId) => (
                    <div className={"dishes__item"} key={dishId}>
                        <DishContainer dishId={dishId} />
                    </div>
                ))}
            </div>
        </MockContext.Provider>
    );
};

const MockDishList = () => {
    const data = Array(3).fill();

    return (
        <div className={"dishes"}>
            {data.map((_, key) => {
                return (
                    <div className={"dishes__item"} key={`mock-dish-list-item-${key}`}>
                        <Dish />
                    </div>
                );
            })}
        </div>
    );
};

export { MockContext };

export default DishesList;
