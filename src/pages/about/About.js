
import React, { useContext } from "react"

import Card from "../../components/Card";

// Components
import Delivery from "./components/Delivery";
import Content from "./components/Content";
import Resources from "./components/Resources";

import { InfoContext } from "../../contexts/InfoContext"


const About = () => {
    
    const background_1 = require("../../img/about/first-paragraph.png");
    const background_2 = require("../../img/about/second-paragraph.png");
    const background_3 = require("../../img/about/third-paragraph.png");

    const pig = require("../../img/about/pig.png");
    const laptop = require("../../img/about/laptop.png");
    const puzzle = require("../../img/about/puzzle.png");
    const camera = require("../../img/about/camera.png");

    const { content, selected } = useContext(InfoContext);

    return (
        <div className="about" >
            <h2 className="about__paragraph about__paragraph--1">Tiber Learning is an online platform that teaches high school students financial literacy and entrepreneurial skills.</h2>
            <h2 className="about__paragraph about__paragraph--2">Modules outfitted with games and videos enable students to learn in an engaging and meaningful style.</h2>
            <h2 className="about__paragraph about__paragraph--3">Tiber Learning introduces real-life applications of mathematical and financial concepts that will be valuable to students to kickstart their future!</h2>
        
            <img className="about__background about__background--1" src={ background_1 } alt="background 1"/>
            <img className="about__background about__background--2" src={ background_2 } alt="background 2"/>
            <img className="about__background about__background--3" src={ background_3 } alt="background 3"/>

            <img className="about__img about__img--pig" src={ pig } alt="piggy bank"/>
            <img className="about__img about__img--laptop" src={ laptop } alt="laptop"/>
            <img className="about__img about__img--puzzle" src={ puzzle } alt="puzzle"/>
            <img className="about__img about__img--camera" src={ camera } alt="camera" />


            <div className="about__info">


                <div className="about__cards">
                    { content.map(( card, index ) => {
                        return (
                            <Card item={ card } key={ index } />
                        )
                    }) }
                </div>
                <div className="about__content">
                    <h2 className="about__content--heading">{selected.name}</h2>

                    { selected.name === "delivery" && <Delivery content={ selected } /> }
                    { selected.name === "content" && <Content content={ selected } /> }
                    { selected.name === "resources" && <Resources content={ selected } /> }
                </div>
            </div>
        </div>
    )
}

export default About;