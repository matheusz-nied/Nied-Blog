import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default class Post extends Component {
    render() {
        const { data } = this.props;
        const { fields } = data.markdownRemark;
        const { slug } = fields;
        const { title, tags, date, description } =
            data.markdownRemark.frontmatter;
        const { html } = data.markdownRemark;

        console.log(data);
        return (
            <Layout marginTop="-37rem">
                <div
                    style={{
                        backgroundColor: "#FFF",
                        width: "100%",
                        paddingRight: ".5rem",
                        paddingLeft: ".5rem",
                        borderRadius: "0.50rem",
                        marginTop: "3rem",
                    }}
                >
                    <SEO
                        title={title}
                        url={slug}
                        description={description}
                        article
                    />
                    <h2 className="tittlePost">{title}</h2>
                    <div className="dateTag">
                            <p>{date} </p>
                            <span className="espacamento"> • </span>
                            <p className="tagPost">
                                {tags.map((tag) => (
                                    <Link
                                        style={{
                                            color: "#000",
                                            marginRight: "10px",
                                        }}
                                        key={tag}
                                        to={`/tag/${_.kebabCase(tag)}`}
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </p>{" "}
                        </div>
                    <div className="imagePost">
                        
                        <GatsbyImage
                            image={getImage(
                                data.markdownRemark.frontmatter.Imagez
                            )}
                            alt={data.markdownRemark.frontmatter.title}
                        />
                    </div>

                    <div className="content">
                        <p dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query PostPage($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            excerpt
            frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                tags
                description
                Imagez {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1200
                            height: 600
                            blurredOptions: { width: 100 }
                            placeholder: BLURRED
                            transformOptions: { cropFocus: CENTER }
                            aspectRatio: 0.7
                        )
                    }
                }
            }
            fields {
                slug
            }
        }
    }
`;
