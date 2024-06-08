import {useState, useEffect} from "react";
import animateText from "./lib";
import "./Unfinished.css";

const About = () => {
    const [heading, setHeading] = useState("");
    const [paragraph, setParagraph] = useState("");
    const [apiText, setApiText] = useState("");

    useEffect(() => {
        animateText("Hello world!", 200, "_", setHeading);
        animateText("This is my personal developer portfolio, but it's not quite finished yet. Please come back later!", 20, "", setParagraph);
    }, []);

    return (
        <div className="about">
            <div className="heading">
                <h1>{heading}</h1>
            </div>
            <div className="paragraph">
                <p>{paragraph}</p>
            </div>
            <div className="paragraph">
                <button onClick={async () => {
                    try {
                        const res = await fetch("/api/hello");
                        const data = await res.json();
                        setApiText(data.message);
                    } catch (error) {
                        setApiText("" + error);
                    }
                }}>Test API</button>
                <p>{apiText}</p>
            </div>
        </div>
    );
}

export default About;
