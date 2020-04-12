import React, { useCallback } from "react";

import "./Header.scss";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

const Header = (props) => {
    const { title = "Меню" } = props;

    const onSearchBarChangeHandler = useCallback((e) => {
        console.log(e.target.value);
    }, []);

    return (
        <div>
            <header className="header">
                <div className="header__logo">
                    <Logo
                        src={require("../../images/logo.png")}
                        alt={"Mealty Time"}
                        title={"Mealty Time"}
                    />
                </div>
                <div className="header__title">{title}</div>
                <div className="header__search">
                    <SearchBar onChangeHandler={onSearchBarChangeHandler} />
                </div>
            </header>
        </div>
    );
};

export default Header;
