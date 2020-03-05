
import React from "react"
import Mailchimp from "./Mailchimp"
 
const Subscribe = () => {

    return (
        <div className="subscribe">
            <Mailchimp className="subscribe__form" action="https://tiberlearning.us3.list-manage.com/subscribe/post?u=5a20b2f5f9cf7486ca46ff52a&amp;id=c73c3b3c64"
                fields={[{ name: "EMAIL", placeholder: "Email Address", type: "email", required: true}]} />
        </div>
    )
}

export default Subscribe