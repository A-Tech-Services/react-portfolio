import "./FooterStyle.css";

import React from "react";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome 
                            size={20} 
                            style={{color: "#fff", marginRight: "2rem"}}
                        />
                        <div>
                            <p>123 Agbowo Apata</p>
                            <p>University of Ibadan</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone 
                                size={20} 
                                style={{color: "#fff", marginRight: "2rem"}}
                            />
                                +2347051670747
                        </h4>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk 
                                size={20} 
                                style={{color: "#fff", marginRight: "2rem"}}
                            /> 
                            atechservices45@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About A-Tech Services</h4>
                    <p>This Abiodun O. Amos the founder & CEO
                        of A-Tech Services. I enjoy discussing
                        new projects and design challenges.
                    </p>

                    <div className="social">
                        <FaFacebook 
                            size={20}
                            style={{color: "#fff", marginRight: "1rem"}}
                        />
                        <FaTwitter
                            size={20}
                            style={{color: "#fff", marginRight: "1rem"}}
                        />
                        <FaLinkedin
                            size={20}
                            style={{color: "#fff", marginRight: "1rem"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;