import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar(){
    return(
        <nav className="navbar">
        <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>

            </ul></nav>
    )
}
export default Navbar;