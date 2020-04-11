import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchBar.scss";

const SearchBar = () => {
    return (
        <div className="search">
            <FontAwesomeIcon
                icon={["fas", "search"]}
                className={"search__icon"}
            />
            <input
                type={"search"}
                className="search__input"
                placeholder={"Найти..."}
            />
        </div>
    );
};

export default SearchBar;
