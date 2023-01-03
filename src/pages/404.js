import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";

const PageNotFound = () => (
    <Layout>
        <SEO title={"Notfound"}/>
        <p>Infelizmente a página desejada não pode ser encontrada!</p>
    </Layout>
);

export default PageNotFound;
