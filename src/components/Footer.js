import "./FooterStyle"

import React from "react";

import { FaHome, FaPhone } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>123 Agbowo Apata</p>
                            <p>University of Ibadan</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                            +2347051670747
                        </h4>
                    </div>

                    <div className="email">
                        <FaMailBulk size={20} style={{color: "#fff"}}/>
                        <div>
                            <p>oluwapelumiabiodun45@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="right"></div>
            </div>
        </div>
    )
}

export default Footer;