import { Link } from "react-router-dom";
import "./AboutStyles.css";
import React from 'react';
import React1 from "../images/react1.jpg";
import React2 from "../images/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p> I am passionate about creating exceptional user experiences 
                through innovative and visually captivating websites and applications. 
                With a deep understanding of front-end technologies such as HTML, CSS, JavaScript,
                and React. I specialize in translating design concepts into seamless and interactive interfaces.
            </p>

            <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>

                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent 