import React from "react";

import "./styles.scss";

const Logo = (props) => {
    const { imageSrc = "", alt = "", title = "", url = "/" } = props;

    return (
        <div className={"logo"}>
            <a href={url}>
                <img src={imageSrc} alt={alt} title={title} width={"165"} />
            </a>
        </div>
    );
};

export default Logo;
