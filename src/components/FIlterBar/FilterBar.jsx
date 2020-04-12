import React, { useCallback } from "react";

import "./FilterBar.scss";
import LabelButton from "../LabelButton/LabelButton";

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

    return (
        <div>
            <form className={"filter"}>
                {data.map((item) => (
                    <div className={"filter__item"} key={item.id}>
                        <LabelButton
                            id={item.id}
                            type={item.type}
                            name={item.name}
                            content={item.content}
                            value={item.value}
                            onChange={onFormInputChangeHandler}
                        />
                    </div>
                ))}
            </form>
        </div>
    );
};

export default FilterBar;
