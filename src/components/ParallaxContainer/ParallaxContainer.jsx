import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./ParallaxContainer.scss";

const ParallaxContainer = ({ text = "" }) => {
    return (
        <div className="parallaxcont">
            <Parallax className="" speed={-25}>
                <div className="background-image">
                <p>{text}</p>

                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxContainer;
