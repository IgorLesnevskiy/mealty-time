import React from "react";

import Floor from "../../components/Floor";
import Header from "../../components/Header";

import DishesListContainer from "../../containers/dishes/DishesListContainer";
import DishesControlBarContainer from "../../containers/dishes/DishesControlBarContainer";

const IndexPage = () => {
    return (
        <React.Fragment>
            <Floor
                offsetTop={"medium"}
                offsetBottom={"medium"}
                disableBottomBorder={true}
            >
                <Header />
            </Floor>

            <Floor offsetTop={"small"} offsetBottom={"small"}>
                <DishesControlBarContainer type={"filters"} title={"Фильтры"} />
            </Floor>

            <Floor offsetTop={"small"} offsetBottom={"small"}>
                <DishesControlBarContainer
                    type={"sorters"}
                    title={"Сортировка"}
                />
            </Floor>

            <Floor offsetTop={"none"} offsetBottom={"none"}>
                <DishesListContainer />
            </Floor>
        </React.Fragment>
    );
};

export default IndexPage;
