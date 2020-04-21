import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchBar.scss";

const SearchBar = (props) => {
    const {
        name = "search",
        placeholder = "Найти...",
        searchDishes = Function.prototype,
    } = props;

    const onChangeHandler = useCallback(
        (e) => {
            searchDishes({
                query: e.target.value,
            });
        },
        [searchDishes]
    );

    return (
        <div className="search">
            <FontAwesomeIcon
                icon={["fas", "search"]}
                className={"search__icon"}
            />
            <input
                className="search__input"
                type={"search"}
                name={name}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default SearchBar;
