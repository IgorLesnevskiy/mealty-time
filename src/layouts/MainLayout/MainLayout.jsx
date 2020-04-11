import React from "react";

import Page from "../../components/Page/Page";

// import './MainLayout.scss'

const MainLayout = (props) => {
    return <Page>{props.children}</Page>;
};

export default MainLayout;
