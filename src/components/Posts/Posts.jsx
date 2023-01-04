import React from "react";
import { Link } from "gatsby";
import "./Posts.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Posts = ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    const posts = edges.map(({ node }) => (
        <Link to={node.fields.slug} className="post-title">
            <div key={node.fields.slug} className="post">
            <GatsbyImage image={getImage(node.frontmatter.Imagez)} alt={node.frontmatter.title} />

                <div>
                    <h2>{node.frontmatter.title}</h2>
                    <p className="post-date">{node.frontmatter.date}</p>
                    <p>{node.frontmatter.description}</p>
                </div>
            </div>
        </Link>
    ));
    return <div className="posts">{posts}</div>;
};

export default Posts;
