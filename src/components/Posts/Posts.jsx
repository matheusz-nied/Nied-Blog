import React from "react";
import { Link } from "gatsby";
import "./Posts.scss";

const Posts = ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    const posts = edges.map(({ node }) => (
        <Link to={node.fields.slug} className="post-title">
            <div key={node.fields.slug} className="post">
                <h2>{node.frontmatter.title}</h2>
                <p className="post-date">{node.frontmatter.date}</p>
                <p>{node.frontmatter.description}</p>
            </div>
        </Link>
    ));
    return <div className="posts">{posts}</div>;
};

export default Posts;
