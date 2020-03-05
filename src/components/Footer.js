
import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {

    const logo = require("../img/main-logo.png");
    const facebookLogo = require("../img/footer/facebook.png")
    const instagramLogo = require("../img/footer/instagram.png")
    const linkedInLogo = require("../img/footer/linkedin.png")

    return (
        <footer className="footer">
            <NavLink to="/" className="footer__logo-link"><img className="footer__logo" src={ logo } alt="tiber logo"/></NavLink>
            <div className="socials">
                <a className="socials__link" href="https://www.facebook.com/Tiber-688848621559789/" target="_blank" rel="noopener noreferrer">
                    <img className="socials__img" src={ facebookLogo } alt="facebook link"/>
                </a>
                <a className="socials__link" href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img className="socials__img" src={ instagramLogo } alt="instagram link"/>
                </a>
                <a className="socials__link" href="http://linkedin.com/company/tiberlearning" target="_blank" rel="noopener noreferrer">
                    <img className="socials__img" id="linkedin-logo" src={ linkedInLogo } alt="linkedin link"/>
                </a>
            </div>
            <span className="footer__copyright">Copyright &copy; 2019 Tiber</span>
        </footer>
    )
}

export default Footer;