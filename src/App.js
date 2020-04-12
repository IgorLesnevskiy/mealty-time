import React from "react";

import { Router } from "@reach/router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./App.scss";

import MainLayout from "./layouts/MainLayout/MainLayout";

import IndexPage from "./pages/IndexPage/IndexPage";

library.add(fas);

const IndexPageWithLayout = () => (
    <MainLayout>
        <IndexPage />
    </MainLayout>
);

function App() {
    return (
        <Router>
            <IndexPageWithLayout path={"/"} />
        </Router>
    );
}

export default App;
