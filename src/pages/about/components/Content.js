
import React from "react"

import sprite from '../../../img/sprites.svg'

const contentInfo = [{name: "Budgeting", icon: "#icon-stats", desc: "This will include topics such as how to properly budget, managing your income and expenses, how to plan for one’s future such as emergencies, and university expenses."}, 
                            {name: "Banking", icon: "#icon-bank", desc: "Learning that language used at local banks, topics on the different kinds of services offered, and different important concepts such as credit, interest, and many more."}, 
                            {name: "Financial Instruments", icon: "#icon-dollar", desc: "Learning the basics of finance particularly in investing and market concepts. This will help them get an idea on what they can do with their money to grow or a foundation if they want to start a career in finance."}]

const contentLessons = ["I. Understanding Your Worth", "II. Spending Money", "III. Saving Money", "IV. Investing", "V. Math", "VI. Budgeting", "VII. Banking", 
                        "VII. Taxes", "IX. Students", "X. Resources and Next Steps"];

const Content = () => {
    return (
        <div className="content content-container">
            <div className="content__cards">
                { contentInfo.map((card, index) => {
                    return (
                        <div className="card" key={ index }>
                            <svg className="card__icon">
                                <use href={sprite + card.icon}></use>
                            </svg>
                            <span className="card__title">
                                { card.name }
                            </span>
                            <span className="card__desc">
                                { card.desc }
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className="content__lessons">
                <h2 className="content__lessons--heading">Tiber Learning's Financial Foundation</h2>
                <div className="content__lessons--list">
                    { contentLessons.map((lesson, index) => {
                        return (
                            <div className="content__lesson" key={ index }>
                                <span className="content__lesson--desc">{ lesson }</span>
                            </div>
                        )
                })}
                </div>
            </div>
        </div> 
    )
}

export default Content;
