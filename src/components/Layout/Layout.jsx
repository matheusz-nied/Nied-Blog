import React from "react";
import Container from "../Container";
import Header from "../Header";
import Helmet from "react-helmet";
import favicon from "../../../static/favicon.jpg";
import config from "../../../data/config";
import "./Layout.scss";
import ParallaxContainer from "../ParallaxContainer";
import Footer from "../Footer/Footer";
import ShadowContainer from "../ShadowContainer";

const Layout = ({ children, title, marginTop }) => (
    <>
        <Helmet>
            <meta name="description" content={config.siteDescription} />
            <link rel="icon" href={favicon} />
        </Helmet>
        <Header/>
        <ParallaxContainer/>
        <ShadowContainer marginTop={marginTop}>
        <main role="main">
            <Container>{children}</Container>
        </main>
        </ShadowContainer>
       
        <Footer/>

    </>
);

export default Layout;
