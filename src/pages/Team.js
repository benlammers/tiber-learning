
import React from "react"
import Member from "../components/Member";

const Team = () => {

    const Christian = require("../img/team/christian.jpg");
    const Hannah = require("../img/team/hannah.jpg");
    const Sophie = require("../img/team/sophie.jpg");
    const Iulia = require("../img/team/iulia.jpg");
    const Ben = require("../img/team/ben.jpg");
    const David = require("../img/team/david.jpg");
    const Blank = require("../img/team/blank.png");

    const arrow1 = require("../img/team/arrow-1.png");
    const arrow2 = require("../img/team/arrow-2.png");
    const queens = require("../img/team/queens.png");
    const enactus = require("../img/team/enactus.png");
    const tiber = require("../img/team/logo.png");

    const members = [{name: "Christian Soriano", headshot: Christian}, 
                        {name: "Hannah Gray", headshot: Hannah},
                        {name: "Sophie Campbell", headshot: Sophie},
                        {name: "Iulia Iancu", headshot: Iulia},
                        {name: "Ben Lammers", headshot: Ben},
                        {name: "David Strohmer", headshot: David},
                        {name: "Isla Hawkins", headshot: Blank},
                        {name: "Kevin Ding", headshot: Blank},
                        {name: "Laura Tang", headshot: Blank},
                        {name: "Luca Nigro", headshot: Blank}
                    ];

    const partners = [{name: "DDQIC", url: "https://www.queensu.ca/innovationcentre/", img: require("../img/sponsors/queens-innovation.jpg")},
                        {name: "RBC", url: "https://www.rbc.com/dms/enterprise/futurelaunch/", img: require("../img/sponsors/rbc.png")},
                        {name: "Enactus", url: "https://www.enactus.ca", img: require("../img/sponsors/enactus.png")},
                        {name: "Queens", url: "https://www.queensu.ca/", img: require("../img/sponsors/queens.png")}];

    return (
        <div className="team">
            <div className="team__heading heading-1">Meet the Team</div>
            <div className="team__members">
                { members.map((member, index) => {
                    return ( <Member key={ index } member= { member } />
                )})}
            </div>
            <div className="team__queens">
                <img className="team__images--queens" src={ queens } alt="Queens Logo" />
                <img className="team__images--arrow-1" src={ arrow1 } alt="arrow" />
                <img className="team__images--enactus" src={ enactus } alt="Enactus Logo" />
                <img className="team__images--arrow-2" src={ arrow2 } alt="arrow" />
                <img className="team__images--tiber" src={ tiber} alt="Tiber Logo" />
                <h2 className="team__paragraph">We are a group of Queen’s University students who began Tiber as an Enactus project who are passionate about educating youth and helping fellow students! There was a void in the Ontario curriculum we saw it and want to fix it.</h2>
            </div>

            <div className="partners">
                <h3 className="partners__heading">Our Partners</h3>
                <div className="partners__content">
                    { partners.map((partner, index) => {
                        return (
                            <a className="partners__link" key={ index } href={ partner.url } target="_blank" rel="noopener noreferrer"><img className="partners__img" src={ partner.img } alt={ partner.name }/></a>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Team;