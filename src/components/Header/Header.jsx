import React from "react";

import "./Header.scss";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__logo">
                    <Logo />
                </div>
                <div className="header__title">Меню</div>
                <div className="header__search">
                    <SearchBar />
                </div>
            </header>
        </div>
    );
};

export default Header;
