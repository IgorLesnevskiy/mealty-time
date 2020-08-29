import React from "react";

import Floor from "../../components/Floor";
import Header from "../../components/Header";

import DishesListContainer from "../../containers/dishes/DishesListContainer";
import DishesControlBarContainer from "../../containers/dishes/DishesControlBarContainer";

const IndexPage = () => {
    return (
        <React.Fragment>
            <div className={"sticky-container"}>
                <div class={"sticky-container__inner"}>
                    <Floor
                        offsetTop={"medium"}
                        offsetBottom={"medium"}
                        disableBottomBorder={true}
                    >
                        <Header />
                    </Floor>
                </div>
            </div>
            <Floor
                offsetTop={"small"}
                offsetBottom={"small"}
                disableBottomBorder={true}
            >
                <DishesControlBarContainer type={"filters"} title={"Фильтры"} />
            </Floor>

            <Floor offsetTop={"small"} offsetBottom={"small"}>
                <DishesControlBarContainer
                    type={"sorters"}
                    title={"Сортировки"}
                />
            </Floor>

            <Floor offsetTop={"none"} offsetBottom={"none"}>
                <DishesListContainer />
            </Floor>
        </React.Fragment>
    );
};

export default IndexPage;
