
import React, { useContext } from "react"

import { InfoContext } from "../contexts/InfoContext"

const Content = () => {

    const { selected } = useContext(InfoContext);

    return (
        <div className="about__content">
            <h2 className="about__content--heading">{selected.name}</h2>
            <span className="about__content--desc">
                { selected.desc }
            </span>
        </div>
    )
}

export default Content;
