import React from "react";

import "./Header.scss";
import SearchBarContainer from "../../containers/dishes/DishesSearchBarContainer";
import SmallBasketContainer from "../../containers/basket/SmallBasketContainer";

const searchBarParams = {
    name: "search",
    placeholder: "Найти...",
};

const Header = (props) => {
    const { title = "Меню" } = props;

    return (
        <header className="header">
            <div className="header__title">{title}</div>
            <div className="header__search">
                <SearchBarContainer {...searchBarParams} />
            </div>
            <div className="header__lunch-pack">
                <SmallBasketContainer />
            </div>
        </header>
    );
};

export default Header;
