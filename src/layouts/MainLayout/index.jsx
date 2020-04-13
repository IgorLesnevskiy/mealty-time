import React from "react";

import Index from "../../components/Page";

import "./styles.scss";

const MainLayout = (props) => {
    return <Index>{props.children}</Index>;
};

export default MainLayout;
