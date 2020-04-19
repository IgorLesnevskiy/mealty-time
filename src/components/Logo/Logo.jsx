import React from "react";

import "./Logo.scss";

const Logo = (props) => {
    const { imageSrc = "", alt = "", title = "", url = "/", width } = props;

    return (
        <div className={"logo"}>
            <a href={url}>
                <img src={imageSrc} alt={alt} title={title} width={width} />
            </a>
        </div>
    );
};

export default Logo;
