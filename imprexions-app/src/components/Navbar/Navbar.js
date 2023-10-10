import React from "react";
import "./../Navbar/Navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbarMenu = [
        {
            name: "About Us",
            path: "/about"
        },
        {
            name: "New Patient",
            path: "/newpatient"
        },
        {
            name: "Our Services",
            path: "/services"
        },
        {
            name: "Contact",
            path: "/contact"
        },
    ]
    return ( 
        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* APP LOGO */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button></button>
                        <div className="collapse navbar-collapse">
                            {/* NAVBAR LINKS */}
                            <ul className="navbar-nav">
                                {
                                    navbarMenu.map((navItem, index) => 
                                        <li className="nav-item" key={index}>
                                            <Link className="nav-link" to={navItem.path}>{navItem.name}</Link>
                                        </li>    
                                    )
                                }
                            </ul>
                            <div className="theme-btn">
                                <Link to="/">Book Appointment</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
     );
}
 
export default Navbar;