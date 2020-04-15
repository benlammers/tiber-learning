
import React, { useState } from "react"

import emailAction from '../constants/emailAction'

const Contact = () => {
    const sendEmail = (e) => {
        setName("");
        setEmail("");
        setMessage("");
        setHasSent(true);

        e.preventDefault()

        var formData ={message: message, name: name, email: email, formDataNameOrder: "[\"message\", \"name\", \"email\"]", formGoogleSheetName: "responses", formGoogleSendEmail: "general@tiberlearning.com"}
        console.log(formData)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', emailAction);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
            xhr.onreadystatechange = function() {
                console.log(xhr.status, xhr.statusText);
                console.log(xhr.responseText);
            }
        }
        var encoded = Object.keys(formData).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(formData[k]);
        }).join('&');
        console.log("sending");
        xhr.send(encoded);
    }

    const [ hasSent, setHasSent ] = useState(false);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    return (
        <div className="contact">
        { hasSent ? 
            <form className="contact__form" onSubmit= { sendEmail }>
                <div className="contact__form--confirmation">
                    <span>Thank you for your message</span>
                </div>
            </form>
            :
            <form className="contact__form" onSubmit= { sendEmail }>
                <label className="contact__form--heading" htmlFor="message">Contact Us</label>
                <textarea className="contact__form--message" value={ message } id="message" name="message" rows="10" placeholder="Message" spellCheck="false" onChange={(e) => setMessage(e.target.value)}/>

                <input className="contact__form--name" value={ name } id="name" name="name" placeholder="Name" spellCheck="false" onChange={(e) => setName(e.target.value)}/>
                <input className="contact__form--email" value={ email } id="email" name="email" type="email" spellCheck="false" required placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>

                <input type="submit" className="contact__form--button" value="Submit" /> 
            </form>
        }
        </div>
    )
}

export default Contact