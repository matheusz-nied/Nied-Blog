import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "./Header.scss";

const Header = () => {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    console.log(data)
    return (
        <header className="header">
            <Link to="/">
                <h1 className="header-title">{data.site.siteMetadata.title}</h1>
            </Link>
        </header>
    );
};

export default Header;
