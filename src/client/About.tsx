import {useState, useEffect} from "react";
import animateText from "./lib";
import "./About.css"

const About = () => {
    const [heading, setHeading] = useState("");
    const [paragraph, setParagraph] = useState("");

    useEffect(() => {
        animateText("About", 200, "_", setHeading);
        animateText("Hi! I'm Keagan, a passionate and curious individual in love with anything computers, languages, or computer languages - also the next employee at your company.", 20, "", setParagraph);
    }, []);

    return (
        <div className="about">
            <div className="heading">
                <h1>{heading}</h1>
            </div>
            <div className="paragraph">
                <p>{paragraph}</p>
            </div>
        </div>
    );
}

export default About;
