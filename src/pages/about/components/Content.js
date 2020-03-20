
import React from "react"

import sprite from '../../../img/sprites.svg'

const Content = ({ content }) => {
    return (
        <div className="content">
            <svg className="content--icon">
                <use href={sprite + "#icon-rocket"}></use>
            </svg>
            <span className="content--desc">
                { content.desc }
            </span>
        </div> 
    )
}

export default Content;
