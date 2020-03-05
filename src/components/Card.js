
import React, { useContext } from "react"
import { InfoContext } from "../contexts/InfoContext"

const Card = ({ item }) => {

    const { selected, selectItem } = useContext(InfoContext);

    const className = ( selected.index === item.index) ? "about__card about__card--selected" : "about__card";

    return (
        <div className={ className } onClick={ (e) => selectItem(item.index) }>
            <img className="about__icon" src={ item.img } alt="laptop" />
            <div className="about__card--title">{ item.name }</div>
        </div>
    )

}

export default Card;