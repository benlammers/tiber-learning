
import React from "react"
import Mailchimp from "./Mailchimp"

import subcribeAction from '../../constants/subscribeAction';
 
const Subscribe = () => {

    return (
        <div className="subscribe">
            <Mailchimp className="subscribe__form" action={ subcribeAction }
                fields={[{ name: "EMAIL", placeholder: "Email Address", type: "email", required: true}]} />
        </div>
    )
}

export default Subscribe