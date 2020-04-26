import React from "react";

import "./Logo.scss";

const Logo = (props) => {
    const {
        imageSrc = "",
        alt = "",
        title = "",
        url = "/",
        width,
        target = "_blank",
    } = props;

    return (
        <div className={"logo"}>
            <a href={url} target={target}>
                <img src={imageSrc} alt={alt} title={title} width={width} />
            </a>
        </div>
    );
};

export default Logo;
