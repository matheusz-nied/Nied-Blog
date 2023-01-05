import React from "react";
import { Link } from "gatsby";
import "./Posts.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Posts = ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    const posts = edges.map(({ node }) => (
        <Link to={node.fields.slug} className="post-title">
            <div key={node.fields.slug} className="Card">
                <div className="image">
                    <GatsbyImage
                        image={getImage(node.frontmatter.Imagez)}
                        alt={node.frontmatter.title}
                    />
                </div>

                <div class="info">
                    <p className="TittleCard">{node.frontmatter.title}</p>
                    <span className="dateInfo">{node.frontmatter.date}</span>

                    <div className="Content">
                        {node.frontmatter.description}
                    </div>

                    <p className="post-date">{}</p>
                    <p>{}</p>
                </div>
            </div>
        </Link>
    ));
    return <div className="posts">{posts}</div>;
};

export default Posts;
