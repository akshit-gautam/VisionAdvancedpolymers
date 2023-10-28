import React, { useState } from "react";
import './navbar.css';
import logo from '../../Images/aki.jpg';
import { useNavigate } from "react-router-dom";
import FontAwesome from "react-fontawesome";

export const Navbar = () => {
    const nav = useNavigate();
    const [navbarExpanded, setNavbarExpanded] = useState(false);
    return (
        <div className="main">

            <div className="links">
                <div className="left">
                    <a href="">
                        <FontAwesome className=""></FontAwesome> +91 9799412028 ,+91 9454599306
                    </a>
                    <a href="">
                        <FontAwesome className=""></FontAwesome> Enquiry@visionadvancepolymers.com
                    </a>
                </div>

                <div className="right">
                    <div>On Social:</div> &nbsp;
                    <a target="_blank" href="https://www.linkedin.com/company/vision-advance-polymer/about/?viewAsMember=true">
                        <FontAwesome className="fa-brands fa-linkedin"></FontAwesome>
                    </a>
                    <a href="">
                        <FontAwesome className="fa-brands fa-google"></FontAwesome>
                    </a>
                    <a href="">
                        <FontAwesome className="fa-brands fa-facebook"></FontAwesome>
                    </a>
                    <a href="">
                        <FontAwesome className="fa-brands fa-instagram"></FontAwesome>
                    </a>
                </div>
            </div>


            <nav className="navbar">
                <div onClick={() => nav("/")} id="logo"><img src={logo} height='100%' alt=""></img></div>

                <div id="responsive-icon">
                    <input type="checkbox" id="icon"></input>
                    <label htmlFor="icon" onClick={()=>setNavbarExpanded(!navbarExpanded)}><FontAwesome className="fa-solid fa-bars" /></label>
                </div>

                <div className={navbarExpanded?"nav-items":"nav-item-hidden"}>
                    <div onClick={() =>{nav("/");setNavbarExpanded(!navbarExpanded)}} className="item font-20">Home</div>
                    <div onClick={() =>{nav("/about");setNavbarExpanded(!navbarExpanded)}} className="item font-20">About</div>
                    <div onClick={() =>{nav("/products");setNavbarExpanded(!navbarExpanded)}} className="item font-20">Products</div>
                    <div onClick={() =>{nav("/market");setNavbarExpanded(!navbarExpanded)}} className="item font-20">Market</div>
                    <div onClick={() =>{nav("/contact");setNavbarExpanded(!navbarExpanded)}} className="item font-20">Contact</div>
                </div>
            </nav>


            <div className="line"></div>

        </div>
    )
}
export default Navbar;

