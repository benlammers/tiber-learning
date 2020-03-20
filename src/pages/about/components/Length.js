
import React from "react"

const Length = ({ content }) => {
    return (
        <div className="length">
            <span className="length--desc">
                { content.desc }
            </span>
        </div> 
    )
}

export default Length;
