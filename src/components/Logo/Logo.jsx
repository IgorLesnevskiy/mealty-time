import React from "react";

import "./Logo.scss";

const Logo = (props) => {
    const { src = "", alt = "", title = "" } = props;

    return (
        <div className={"logo"}>
            <a href={"/"}>
                <img src={src} alt={alt} title={title} width={"165"} />
            </a>
        </div>
    );
};

export default Logo;
