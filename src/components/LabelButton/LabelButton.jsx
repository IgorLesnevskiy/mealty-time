import React from "react";

import "./LabelButton.scss";

const LabelButton = () => {
    return (
        <div>
            <label className={"label-button"}>
                <input
                    className={"label-button__control"}
                    type={"radio"}
                    name={"foo"}
                    defaultChecked={true}
                    value={1}
                />

                <span className={"label-button__content"}>Все блюда</span>
            </label>
        </div>
    );
};

export default LabelButton;
