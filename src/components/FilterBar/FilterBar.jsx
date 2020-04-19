import React, { useCallback } from "react";

import "./FilterBar.scss";
import LabelButton from "../LabelButton";

const FilterBar = (props) => {
    const { items = [] } = props;

    const onFormInputChangeHandler = useCallback((e) => {
        console.log(e);
    }, []);

    const filterItemsMarkup = items.map((item) =>
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
