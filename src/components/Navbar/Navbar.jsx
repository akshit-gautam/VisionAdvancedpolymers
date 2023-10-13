import React from "react";
import './navbar.css';
import logo from '../../Images/aki.jpg';
import { useActionData, useNavigate, useNavigation } from "react-router-dom";
import FontAwesome from "react-fontawesome";

export const Navbar = () => {
    const nav = useNavigate();
    return (
        <div className="main">

            <div className="links">
                <div className="left">
                    <a href="">
                        <FontAwesome className=""></FontAwesome> +9799412028
                    </a>
                    <a href="">
                        <FontAwesome className=""></FontAwesome> sales@vision-engineers.com
                    </a>
                </div>

                <div className="right">
                    <div>On Social:</div>
                    <a target="_blank" href="https://www.linkedin.com/company/vision-advance-polymer/">
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

                <div className="responsive-icon"><FontAwesome className="fa-solid fa-bars"></FontAwesome></div>

                <div className="nav-items">
                    <div onClick={() => nav("/")} className="item font-20">Home</div>
                    <div onClick={() => nav("/about")} className="item font-20">About</div>
                    <div onClick={() => nav("/products")} className="item font-20">Products</div>
                    <div onClick={() => nav("/market")} className="item font-20">Market</div>
                    <div onClick={() => nav("/contact")} className="item font-20">Contact</div>
                </div>
            </nav>


            <div className="line"></div>

        </div>
    )
}
export default Navbar;

