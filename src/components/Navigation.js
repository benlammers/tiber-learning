
import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {

    const [ navOpen, setNavOpen ] = useState()

    return (
        <div className="navigation">
            <input checked = { navOpen } type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation__button" onClick={() => setNavOpen(!navOpen)}>
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item" onClick={() => setNavOpen(!navOpen)}><NavLink className="navigation__links" to="/">Home</NavLink></li>
                    <li className="navigation__item" onClick={() => setNavOpen(!navOpen)}><NavLink className="navigation__links" to="/about">About</NavLink></li>
                    <li className="navigation__item" onClick={() => setNavOpen(!navOpen)}><NavLink className="navigation__links" to="/team">Team</NavLink></li>
                    <li className="navigation__item" onClick={() => setNavOpen(!navOpen)}><NavLink className="navigation__links" to="/get-started">Get Started</NavLink></li>
                    <li className="navigation__item" onClick={() => setNavOpen(!navOpen)}><NavLink className="navigation__links" to="/contact">Contact Us</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;