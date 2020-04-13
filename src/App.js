import React from "react";
import { Router } from "@reach/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./App.scss";

//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import Index from "./pages/IndexPage";

library.add(fas);

const IndexPageWithLayout = () => (
    <MainLayout>
        <Index />
    </MainLayout>
);

function App() {
    return (
        <Router basepath={process.env.PUBLIC_URL}>
            <IndexPageWithLayout path={"/"} />
        </Router>
    );
}

export default App;
