
import React from "react"
import Subscribe from "../components/MailChimp/Subscribe";

const Home = () => {

    const center = require("../img/homepage/pig.png");
    const background = require("../img/homepage/home-background.png");

    return (
        <div className="home">
            <img className="home__background" src= { background } alt="tiber logo" />
            <img className="home__img" src= { center } alt="piggy bank" />
            <h1 className="home__heading heading-1">Kickstart your FUTURE</h1>

            <Subscribe />
        </div>
    )
}

export default Home;