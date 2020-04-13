import React, { useCallback } from "react";

import "./styles.scss";
import LabelButton from "../LabelButton";

const data = [
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
            type: "icon",
            value: "heart",
        },
        value: "all",
    },
];

const FilterBar = () => {
    const onFormInputChangeHandler = useCallback((e) => {
        console.log(e);
    }, []);

    const filterItemsMarkup = data.map((item) =>
        FilterBarItem({
            key: item.id,
            itemData: item,
            handlers: {
                onChange: onFormInputChangeHandler,
            },
        })
    );

    return <form className={"filter"}>{filterItemsMarkup}</form>;
};

const FilterBarItem = ({ key, itemData, handlers }) => {
    return (
        <React.Fragment key={key}>
            <div className={"filter__item"} key={itemData.id}>
                <LabelButton
                    id={itemData.id}
                    type={itemData.type}
                    name={itemData.name}
                    content={itemData.content}
                    value={itemData.value}
                    {...handlers}
                />
            </div>
        </React.Fragment>
    );
};

export default FilterBar;
