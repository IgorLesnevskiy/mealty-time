import React, { useCallback } from "react";

import Floor from "../../components/Floor";
import Header from "../../components/Header";
import DishesListContainer from "../../containers/DishesListContainer";
import FilterBarContainer from "../../containers/FilterBarContainer";

const FilterBarProps = {};

const data = {
    filter: [
        {
            type: "radio",
            id: "foo-bar-baz-1",
            name: "filterDish",
            isChecked: false,
            content: {
                type: "text",
                value: "Все блюда",
            },
            value: "all",
        },
        {
            type: "radio",
            id: "foo-bar-baz-2",
            name: "filterDish",
            isChecked: false,
            content: {
                type: "text",
                value: "Много белков",
            },
            value: "a-lot-of-proteins",
        },
        {
            type: "radio",
            id: "foo-bar-baz-3",
            name: "filterDish",
            isChecked: false,
            content: {
                type: "text",
                value: "Самые объемные",
            },
            value: "the-most-valuable",
        },
        {
            type: "radio",
            id: "foo-bar-baz-4",
            name: "filterDish",
            isChecked: false,
            content: {
                type: "icon",
                value: "heart",
            },
            value: "all",
        },
    ],
};

const IndexPage = () => {
    const onFilterBarChange = useCallback((e) => {
        console.log(e);
    }, []);

    return (
        <React.Fragment>
            <Floor offsetTop={"medium"} offsetBottom={"medium"}>
                <Header />
            </Floor>

            <Floor>
                <FilterBarContainer items={data.filter} />
            </Floor>

            <Floor offsetTop={"none"} offsetBottom={"none"}>
                <DishesListContainer />
            </Floor>
        </React.Fragment>
    );
};

export default IndexPage;
