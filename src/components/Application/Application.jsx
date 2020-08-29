import React from "react";
import { Router } from "@reach/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import * as customIconsPack from "../../resources/icons";

import "./Application.scss";

//layouts
import MainLayout from "../../layouts/MainLayout";

//pages
import IndexPage from "../../pages/IndexPage";

library.add(fas);
library.add(customIconsPack);

const IndexPageWithLayout = () => (
    <MainLayout>
        <IndexPage />
    </MainLayout>
);

function Application() {
    return (
        <Router basepath={process.env.PUBLIC_URL}>
            <IndexPageWithLayout path={"/"} />
        </Router>
    );
}

export default Application;
