
import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {

    const logo = require("../img/main-logo.png");
    const menuImg = require("../img/menu.png");

    return (
        <header className="header">
            <div className="header__logo-container">
                <NavLink to="/"><img className="header__logo" src={ logo } alt="logo"/></NavLink>
            </div>
            <NavLink className="header__links" to="/">
                <span>Home</span>
                <img className="header__links--img" src={ menuImg } alt="paint splash"/>
            </NavLink>
            <NavLink className="header__links" to="/about">
                <span>About</span>
                <img className="header__links--img" src={ menuImg } alt="paint splash"/>
            </NavLink>
            <NavLink className="header__links" to="/team">                
                <span>Team</span>
                <img className="header__links--img" src={ menuImg } alt="paint splash"/>
            </NavLink>
            <NavLink className="header__links" to="/get-started">
                <span>Get Started</span>
                <img className="header__links--img" src={ menuImg } alt="paint splash"/>
            </NavLink>
            <NavLink className="header__links" to="/contact">
                <span>Contact Us</span>
                <img className="header__links--img" src={ menuImg } alt="paint splash"/>
            </NavLink>
        </header>
    )
}

export default Header;