
import React, { useState } from "react"

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault()

        var formData ={message: message, name: name, email: email, formDataNameOrder: "[\"message\", \"name\", \"email\"]", formGoogleSheetName: "responses", formGoogleSendEmail: "21benlammers@gmail.com"}
        console.log(formData)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', "https://script.google.com/macros/s/AKfycbz_1pUP2Oj8Z-aHk-68zQvS77Qk-4biImCh5OYP1A/exec");
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

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const partners = [{name: "DDQIC", url: "https://www.queensu.ca/innovationcentre/", img: require("../img/sponsors/queens-innovation.jpg")},
                        {name: "RBC", url: "https://www.rbc.com/dms/enterprise/futurelaunch/", img: require("../img/sponsors/rbc.png")},
                        {name: "Enactus", url: "https://www.enactus.ca", img: require("../img/sponsors/enactus.png")},
                        {name: "Queens", url: "https://www.queensu.ca/", img: require("../img/sponsors/queens.png")}];

    return (
        <div className="contact">
            <form className="contact__form" onSubmit= { sendEmail }>
                <label className="contact__form--heading" htmlFor="message">Contact Us</label>
                <textarea className="contact__form--message" id="message" name="message" rows="10" placeholder="Message" spellCheck="false" onChange={(e) => setMessage(e.target.value)}/>

                <input className="contact__form--name" id="name" name="name" placeholder="Name" spellCheck="false" onChange={(e) => setName(e.target.value)}/>
                <input className="contact__form--email" id="email" name="email" type="email" spellCheck="false" required placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>

                <input type="submit" className="contact__form--button" value="Submit" />
            </form>

            <div className="partners">
                <h3 className="partners__heading">Our Partners</h3>
                <div className="partners__content">
                    { partners.map((partner, index) => {
                        return (
                            <a className="partners__link" key={ index } href={ partner.url } target="_blank" rel="noopener noreferrer"><img className="partners__img" src={ partner.img } alt={ partner.name }/></a>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Contact