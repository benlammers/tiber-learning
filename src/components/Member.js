
import React from "react"

const Member = ({ member }) => {
  
  return (
    <div className="member">
        <img className="member__image"src={ member.headshot } alt="member headshot" />
        <span className="member__name">{ member.name }</span>
    </div>
)}

export default Member;