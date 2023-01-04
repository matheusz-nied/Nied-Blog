import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./ParallaxContainer.scss";

const ParallaxContainer = ({ home = false }) => {
    return (
        <div className="parallaxcont">
            <Parallax className="" speed={-25}>
                <div className="background-image">
                <p>Conteúdos sobre Ciência e Tecnologia</p>

                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxContainer;
