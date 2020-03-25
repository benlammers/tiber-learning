
import React from "react"

const resourceInfo = ["Government Resources", "Games", "Recommended Books", "Inspiring Stories",  "High School Education", "Income Options", "Scholarship Portal", "Start a Business"]

const Resources = () => {
    return (
        <div className="resources content-container">
            <span className="resources__desc">We have thoughtfully compiled pre-existing resources to further develop your skills, continue your learning, and help motivate you!</span>

            <div className="resources__list">
                {
                    resourceInfo.map((resource, index) => {
                        return (
                            <div className="resources__item" key={index}>
                                <span className="resources__item--desc">{ resource }</span>
                            </div>
                        )
                    })
                }
            </div>
        </div> 
    )
}

export default Resources;
