import React, { useCallback } from "react";

import "./Header.scss";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

const Header = (props) => {
    const { title = "Меню" } = props;

    const onSearchBarChangeHandler = useCallback((e) => {
        console.log(e.target.value);
    }, []);

    const logoParams = {
        imageSrc: require("../../resources/images/logo.png"),
        alt: "Mealty Time",
        title: "Mealty Time",
        width: "165px",
    };

    const searchBarParams = {
        onChange: onSearchBarChangeHandler,
    };

    return (
        <header className="header">
            <div className="header__logo">
                <Logo {...logoParams} />
            </div>
            <div className="header__title">{title}</div>
            <div className="header__search">
                <SearchBar {...searchBarParams} />
            </div>
        </header>
    );
};

export default Header;
