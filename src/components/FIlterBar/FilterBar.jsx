import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FilterBar.scss";
import LabelButton from "../LabelButton/LabelButton";

const FilterBar = () => {
    return (
        <div>
            <form className={"filter"}>
                <div className={"filter__item"}>
                    <LabelButton />
                </div>

                <div className={"filter__item"}>
                    <LabelButton />
                </div>
                <div className={"filter__item"}>
                    <LabelButton />
                </div>
                <div className={"filter__item"}>
                    <LabelButton />
                </div>
                <div className={"filter__item"}>
                    <LabelButton />
                </div>
                <div className={"filter__item"}>
                    <LabelButton />
                </div>

                <div className={"filter__item"}>
                    <LabelButton />
                </div>
                <div className={"filter__item"}>
                    <label className={"label-button"}>
                        <input
                            className={"label-button__control"}
                            type={"radio"}
                            name={"foo"}
                            value={3}
                        />
                        <span className={"label-button__content"}>
                            <FontAwesomeIcon
                                icon={["fas", "heart"]}
                            ></FontAwesomeIcon>
                        </span>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default FilterBar;
