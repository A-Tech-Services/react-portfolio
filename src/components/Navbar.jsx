import "./NavbarStyle.css";

import React, { useState } from "react";
import logo from "../images/atechlogo.png";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


 const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    return(
        <div className={color? "header header-bg" : "header"}>
            <Link to="/"><img className="logo" src={logo}/></Link>
            <ul className={click? "nav-menu active" : "nav-menu"}>
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/project">Projects</Link></li>
                <li><Link className="nav-link" to="/about">About</Link></li>
                <li><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {
                    click? (<FaTimes size={30} style={{color:"#fff"}}/>) :
                    (<FaBars size={30} style={{color: "#fff"}}/>)
                }
                
            </div>
        </div>
    )
 }

 export default Navbar;
