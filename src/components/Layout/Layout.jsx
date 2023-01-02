import React from "react";
import Container from "../Container";
import Header from "../Header";
import Helmet from "react-helmet";
import favicon from "../../../static/favicon.jpg";
import config from "../../../data/config";
import "./Layout.scss";

const Layout = ({ children, title }) => (
    <div>
        <Helmet>
            <meta name="description" content={config.siteDescription} />
            <link rel="icon" href={favicon} />
        </Helmet>
        <Header title={title} />
        <main role="main">
            <Container>{children}</Container>
        </main>
    </div>
);

export default Layout;
