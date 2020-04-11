import React from "react";

import "./Logo.scss";

const Logo = () => {
    return (
        <div className={"logo"}>
            <a href={"/"}>
                <img
                    src={require("../../logo.png")}
                    alt="Mealty Time"
                    title="Mealty Time"
                    width={"165"}
                />
            </a>
        </div>
    );
};

export default Logo;
