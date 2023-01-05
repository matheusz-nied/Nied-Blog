import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import SEO from "../components/SEO/SEO";

import "minireset.css";

export default class Index extends Component {
    render() {
        const { data } = this.props;
        return (
            <Layout  marginTop="-19rem" text="Conteúdos sobre Ciência e Tecnologia">
                <SEO />

                <Posts data={data} />
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [fields___prefix], order: DESC }
            filter: { frontmatter: { draft: { ne: true } } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    timeToRead
                    frontmatter {
                        title
                        tags
                        date(formatString: "DD/MM/YYYY")
                        description
                        Imagez {
                            childImageSharp {
                              gatsbyImageData(
                                width: 1200
                                height: 600
                                blurredOptions: {width: 100}
                                placeholder: BLURRED
                                transformOptions: {cropFocus: CENTER}
                                aspectRatio: 0.7
                              )
                            }
                          }
                    }
                }
            }
        }
    }
`;
