import React from "react";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="ContainerFooter">
            <div className="LinksRedesSociais">
                <a
                    href="https://twitter.com/matheusz_nied"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsTwitter className="twitter" size="2rem" />
                </a>

                <a
                    href="https://www.linkedin.com/in/matheus-fernandes-da-silva-5810201b6/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiOutlineLinkedin className="linkedin" size="2rem" />
                </a>

                <a
                    href="https://github.com/matheusz-nied"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiOutlineGithub className="github" size="2rem" />
                </a>
                <a
                    href="https://www.instagram.com/matheusz.nied/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GrInstagram className="instagram" size="2rem" />
                </a>
            </div>
            <div className="text-footer">© Matheusz Nied</div>
        </div>
    );
};

export default Footer;
