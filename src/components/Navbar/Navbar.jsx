import React from "react";
import './navbar.css';
import logo from '../../Images/ak4.jpg';
import { useActionData, useNavigate, useNavigation } from "react-router-dom";

export const Navbar = () => {
    const nav = useNavigate()
    return (
        <div className="main">
            <div className="links">
                <ul className="links-1">
                    <li><a href="#"> <img src="" alt="" />9799412028 </a></li>
                    <li><a href="#"> <img src="" alt="" />sales@vision-engineers.com</a></li>
                    <li><a href="#">On Social:</a></li>

                </ul>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li>
                        <img src={logo} height={'90%'} alt=""></img>
                         {/* <p className="name">Vision Speciality Polymers</p> */}
                    </li> 
                    <li onClick={() => nav("/")}><a>Home</a></li>
                    <li onClick={() => nav("/about")}><a>About</a>
                    {/* <div className="hover-links">
                    <ul>
                        <li>
                            About us 
                        </li>
                    </ul>
                    </div> */}
                    </li>

                    <li onClick={() => nav("/products")}><a>Products</a></li>
                    <li onClick={() => nav("/markets")}><a>Markets</a></li>
                    <li onClick={() => nav("/contact")}><a>Contact</a></li>
                </ul>
            </nav>
            <div className="line"></div>
            <div className="line-2"></div>

        </div>
    )
}
export default Navbar;

