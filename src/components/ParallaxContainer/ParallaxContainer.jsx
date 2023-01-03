import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import induBackground from "../../../static/induBest.png";
import "./ParallaxContainer.scss";

const ParallaxContainer = ({ home = false }) => {
    // const parallax = useParallax({
    //     speed: -10,
    // });

    return (
        // <div ref={parallax.ref}>
        //     <div className="background-image"></div>
        // </div>
        <div className="parallaxcont">
            <Parallax className="" speed={-10}>
                <div
                    className="background-image"
                ></div>
            </Parallax>
        </div>
    );
};

export default ParallaxContainer;
