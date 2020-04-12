import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchBar.scss";

const SearchBar = (props) => {
    const {
        name = "search",
        placeholder = "Найти...",
        onChangeHandler = Function.prototype,
    } = props;

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
