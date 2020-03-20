
import React from "react"

import sprite from '../../../img/sprites.svg'

const deliveryContent = [{name: "Video Modules", icon: "#icon-film", desc: "Video modules using characters that students can relate to and engaging animations."}, 
                            {name: "Infographics", icon: "#icon-file", desc: "Infographics to summarize key ideas and present in a way that enhances learning experience."}, 
                            {name: "Games", icon: "#icon-rocket", desc: "Games to test their knowledge and activities that will let them experience what they learn in real-life."}, 
                            {name: "Text", icon: "#icon-text", desc: "Text that accommodates everyone."}]


const Delivery = () => {
    return (
        <div className="delivery">
            <div className="delivery__cards">
                { deliveryContent.map((card, index) => {
                    return(
                        <div className="delivery__card" key={index}>
                            <svg className="delivery__card--icon">
                                <use href={sprite + card.icon}></use>
                            </svg>
                            <span className="delivery__card--title">
                                { card.name }
                            </span>
                            <span className="delivery__card--desc">
                                { card.desc }
                            </span>
                        </div>
                    )
                })}
            </div>
            <h2 className="delivery__desc">
                Tiber Learning is a completely online learning platform, which enables our lessons to be delivered in a way that engages students and teachers alike. We believe that every student learns differently which is why we want Tiber Learning to accommodate all students.
            </h2>
        </div> 
    )
}

export default Delivery;
