 import "./NavbarStyle.css";
 import React from "react";
import logo from "../images/atechlogo.png";

 import { Link } from "react-router-dom";

 const Navbar = () => {
    return(
        <div className="header">
            <Link to="/"><img className="logo" src={logo}/></Link>
            <ul className="nav-menu">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/project">Projects</Link></li>
                <li><Link className="nav-link" to="/about">About</Link></li>
                <li><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
 }

 export default Navbar;
