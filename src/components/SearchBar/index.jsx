import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

const SearchBar = (props) => {
    const {
        name = "search",
        placeholder = "Найти...",
        onChange = Function.prototype,
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
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBar;
