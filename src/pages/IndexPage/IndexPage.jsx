import React from "react";

import Floor from "../../components/Floor";
import Header from "../../components/Header";
import DishesListContainer from "../../containers/DishesListContainer";
import FilterBarContainer from "../../containers/FilterBarContainer";

const IndexPage = () => {
    return (
        <React.Fragment>
            <Floor offsetTop={"medium"} offsetBottom={"medium"}>
                <Header />
            </Floor>

            <Floor>
                <FilterBarContainer />
            </Floor>

            <Floor offsetTop={"none"} offsetBottom={"none"}>
                <DishesListContainer />
            </Floor>
        </React.Fragment>
    );
};

export default IndexPage;
