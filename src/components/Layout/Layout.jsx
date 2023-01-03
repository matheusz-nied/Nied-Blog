import React from "react";
import Container from "../Container";
import Header from "../Header";
import Helmet from "react-helmet";
import favicon from "../../../static/favicon.jpg";
import config from "../../../data/config";
import "./Layout.scss";
import ParallaxContainer from "../ParallaxContainer";
import Footer from "../Footer/Footer";

const Layout = ({ children, title }) => (
    <>
        <Helmet>
            <meta name="description" content={config.siteDescription} />
            <link rel="icon" href={favicon} />
        </Helmet>
        <Header/>
        <ParallaxContainer/>
        <main role="main">
            <Container>{children}</Container>
        </main>
        <Footer/>

    </>
);

export default Layout;
