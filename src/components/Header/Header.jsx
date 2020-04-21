import React, { useCallback } from "react";

import "./Header.scss";
import Logo from "../Logo";
import SearchBarContainer from "../../containers/SearchBarContainer";

const logoParams = {
    imageSrc: require("../../resources/images/logo.png"),
    alt: "Mealty Time",
    title: "Mealty Time",
    width: "165px",
};

const searchBarParams = {
    name: "search",
    placeholder: "Найти...",
};

const Header = (props) => {
    const { title = "Меню" } = props;

    return (
        <header className="header">
            <div className="header__logo">
                <Logo {...logoParams} />
            </div>
            <div className="header__title">{title}</div>
            <div className="header__search">
                <SearchBarContainer {...searchBarParams} />
            </div>
        </header>
    );
};

export default Header;
