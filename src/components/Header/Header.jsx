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

    console.log(data);
    return (
        <nav className="nav">
            <Link href="/" className="tittle">
                {data.site.siteMetadata.title}
            </Link>
                <div className="containerLinks">
                        <div>
                            <Link href="/">Home</Link>
                        </div>
                        <div>
                            <Link href="/">Posts</Link>
                        </div>
                        <div>
                            <Link href="/about">Undefiniedz</Link>
                        </div>
                </div>

            

        </nav>
    );
};

export default Header;

// return (
//     <header className="header">
//         <Link to="/">
//             <h1 className="header-title">{data.site.siteMetadata.title}</h1>
//         </Link>
//     </header>
// );
