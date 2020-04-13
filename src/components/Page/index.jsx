import React from "react";

import "./styles.scss";

const Page = (props) => {
    return (
        <div className="page">
            <div className="page__inner">{props.children}</div>
        </div>
    );
};

export default Page;
