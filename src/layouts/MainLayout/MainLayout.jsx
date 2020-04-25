import React from "react";

import Page from "../../components/Page/Page";

import "./MainLayout.scss";
import UpButton from "../../components/UpButton";

const MainLayout = (props) => {
    return (
        <React.Fragment>
            <Page>{props.children}</Page>

            <UpButton />
        </React.Fragment>
    );
};

export default MainLayout;
