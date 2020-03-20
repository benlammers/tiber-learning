
import React from "react"

const Resources = ({ content }) => {
    return (
        <div className="resources">
            <span className="resources--desc">
                { content.desc }
            </span>
        </div> 
    )
}

export default Resources;
