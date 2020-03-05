
import React, { createContext, useState} from "react"

export const InfoContext = createContext();

const deliveryDesc = <span id="topic-desc">Tiber is a completely online learning platform, which enables our lessons to be delivered in a way that engages students and teachers alike.<br/><br/>We will deliver our lessons in a variety of ways:<br/>- Video modules using characters that students can relate to and engaging animations.<br/>- Infographics to summarize key ideas and present in a way that enhances learning experience.<br/>- Games to test their knowledge and activities that will let them experience what they learn in real-life. (I.e. Interacting with actual banking institutions)<br/>- Text that will accommodate everyone.<br/><br/>We believe that every student learns differently which is why we want Tiber to accommodate all students.</span>
const contentDesc = <span id="topic-desc">Tiber"s 3 Main Topics:<br/><br/>1. Budgeting: This will include topics such as how to properly budget, managing your income and expenses, how to plan for one’s future such as emergencies, and university expenses.<br/>2. Banking: Learning that language used at local banks, topics on the different kinds of services offered, and different important concepts such as credit, interest, and many more.<br/>3. Financial Instruments: Learning the basics of finance particularly in investing and market concepts. This will help them get an idea on what they can do with their money to grow or a foundation if they want to start a career in finance.<br/><br/>There is also what we call, Tiber’s Financial Foundation which consists of Ten Lessons:<br/><br/>I. Understanding your Worth<br/>II. Spending Money<br/>III. Saving Money<br/>IV. Investing<br/>V. Math<br/>VI. Budgeting and Goal-Setting<br/>VII. Banking<br/>VIII. Taxes and Government-Involvement<br/>IX. Students<br/>X. Resources and Next Steps</span>
const lengthDesc = <span id="topic-desc">The length of our modules are one hour per activity, with an additional “homework” piece that students can choose to spend more time on.<br/><br/>We estimate our whole product to take 3 weeks to finish if implemented properly.</span>
const resourcesDesc = <span id="topic-desc">We have thoughtfully compiled pre-existing resources to further develop your skills, continue your learning, and help motivate you!<br/>- Government Resources<br/>- Games<br/>- Recommended Books<br/>- Inspiring Videos/Stories/People<br/>- Tips and Tricks for your High School Education<br/>- Income Options<br/>&nbsp;&nbsp;&nbsp;&nbsp;- Scholarship portal<br/>&nbsp;&nbsp;&nbsp;&nbsp;- Start a business</span> 

const laptopInfo = require("../img/how-it-works/laptop.png");
const newspaper = require("../img/how-it-works/newspaper.png");
const timer = require("../img/how-it-works/timer.png");
const bluePrint = require("../img/how-it-works/blue-print.png");



const InfoContextProvider = (props) => {

    const content = [{ name: "Delivery", img: laptopInfo, desc: deliveryDesc, index: 0 }, 
                    { name: "Content", img: newspaper, desc: contentDesc, index: 1 }, 
                    { name: "Length", img: timer, desc: lengthDesc, index: 2 }, 
                    { name: "Resources", img: bluePrint, desc: resourcesDesc, index: 3 }];

    const [selected, setSelected] = useState(content[0]);  //Holds reference to Info items of selected current Info

    const selectItem = (index) => {
        setSelected(content[index]);
    }

    return (  
        <InfoContext.Provider value={{ content, selected, selectItem }}>
            { props.children }
        </InfoContext.Provider>
    );
}
 
export default InfoContextProvider;