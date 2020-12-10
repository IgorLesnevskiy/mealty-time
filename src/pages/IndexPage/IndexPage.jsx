import React from "react";

import Floor from "../../components/Floor";
import Header from "../../components/Header";

import DishesListContainer from "../../containers/dishes/DishesListContainer";
import DishesControlBarContainer from "../../containers/dishes/DishesControlBarContainer";
import StickyContainer from "../../components/StickyContainer";

const IndexPage = () => {
    // TODO должен ли я перебрасывать себя на верх страница, когда что-то нашел, но я скролю?
    // TODO должен ли я использовать position:sticky? появляется проблема с выделением границы шапки
    return (
        <React.Fragment>
            <StickyContainer zIndex={9999}>
                <Floor offsetTop={"medium"} offsetBottom={"medium"}>
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
