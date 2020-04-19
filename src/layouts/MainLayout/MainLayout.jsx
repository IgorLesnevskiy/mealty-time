import React from "react";

import Index from "../../components/Page/Page";

import "./MainLayout.scss";

const MainLayout = (props) => {
    return <Index>{props.children}</Index>;
};

export default MainLayout;
