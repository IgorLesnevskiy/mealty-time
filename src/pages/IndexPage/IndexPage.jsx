import React from "react";

import Floor from "../../components/Floor/Floor";
import Header from "../../components/Header/Header";
import FilterBar from "../../components/FIlterBar/FilterBar";
import DishesList from "../../components/DishesList/DishesList";

const IndexPage = () => {
    return (
        <React.Fragment>
            <Floor
                offsetTop={"medium"}
                offsetBotttom={"medium"}
                extraClasses={"foo"}
            >
                <Header />
            </Floor>

            <Floor>
                <FilterBar />
            </Floor>

            <Floor offsetTop={"none"} offsetBotttom={"none"}>
                <DishesList />
            </Floor>
        </React.Fragment>
    );
};

export default IndexPage;
