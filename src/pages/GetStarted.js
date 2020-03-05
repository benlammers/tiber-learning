
import React from "react"

const GetStarted = () => {

    const backImage = require("../img/homepage/home-background.png");

    return (
        <div className="get-started">
            <h1 className="get-started__heading heading-1">Tiber Learning will be available soon</h1>
            <img className="get-started__background" src={ backImage } alt="background" />
        </div>
    )
}

export default GetStarted;