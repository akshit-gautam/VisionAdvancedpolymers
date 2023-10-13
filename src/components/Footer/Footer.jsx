import React from 'react'
import './footer.css';
import logo from '../../Images/logo.png';
import FontAwesome from 'react-fontawesome';

export const Footer = () => {
    return (

        <footer className="main-footer">
            <div className="small-footer">    
            </div>
            <div className="container">
                <div className="footer-about">
                    <div className="logo">
                        {/* <img src={logo} alt="" /> */}
                    </div>
                    <div className="para poppins">
                    F2R8+Q63, Block H, Ashok Vihar, Sector 3, Gurugram, Haryana 122006.
                    </div>
                </div>

                {/* 2column  */}
                <div className="information">
                    <ul className="tech">
                        <li>
                            <h3 className="heading-1 poppins"> Introduction</h3>
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            Market
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>       
                </div>
                {/* 3column */}
                <div className="links">
                        <ul className="link-1">
                            <li>
                                <h3 className="heading-2 poppins">Links</h3>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/">
                            <FontAwesome className="fa-brands fa-instagram">
                            </FontAwesome>  Instagram
                            </a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/company/vision-advance-polymer/"><FontAwesome className="fa-brands fa-linkedin">
                            </FontAwesome>  Linkedin
                            </a>
                            </li>
                            <li>
                            <a href="https://www.facebook.com/"><FontAwesome className="fa-brands fa-facebook">
                            </FontAwesome>  Facebook
                            </a>
                            </li>
                            <li>
                            <a href="https://www.youtube.com/"><FontAwesome className="fa-brands fa-youtube">
                            </FontAwesome>  Youtube
                            </a>
                            </li>
                        </ul>
                    </div>
            </div>


        </footer>
    );
};

export default Footer;
