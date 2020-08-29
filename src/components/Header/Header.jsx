import React from "react";

import "./Header.scss";
import SearchBarContainer from "../../containers/dishes/DishesSearchBarContainer";
import LabelIcon from "../LabelIcon";

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
                <LabelIcon
                    id={`dish-pack`}
                    type={"checkbox"}
                    name={`dish-pack`}
                    icon={"empty-food-bank"}
                    value={`dish-pack`}
                />
            </div>
        </header>
    );
};

export default Header;
