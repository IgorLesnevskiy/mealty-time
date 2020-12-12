import React from "react";

import Floor from "../../components/Floor";
import Header from "../../components/Header";

import DishesListContainer from "../../containers/dishes/DishesListContainer";
import DishesControlBarContainer from "../../containers/dishes/DishesControlBarContainer";
import StickyContainer from "../../components/StickyContainer";

const IndexPage = () => {
    return (
        <React.Fragment>
            <StickyContainer zIndex={9999} extraStyles={{ boxShadow: "0px -5px 10px #000" }}>
                <Floor offsetTop={"medium"} offsetBottom={"medium"} disableBottomBorder={true}>
                    <Header />
                </Floor>
            </StickyContainer>

            <Floor offsetTop={"small"} offsetBottom={"small"} disableBottomBorder={true}>
                <DishesControlBarContainer type={"filters"} title={"Фильтры"} />
            </Floor>
            <Floor offsetTop={"small"} offsetBottom={"small"}>
                <DishesControlBarContainer type={"sorters"} title={"Сортировки"} />
            </Floor>
            <Floor offsetTop={"none"} offsetBottom={"none"}>
                <DishesListContainer />
            </Floor>
        </React.Fragment>
    );
};

export default IndexPage;
