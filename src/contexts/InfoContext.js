
import React, { createContext, useState} from "react"

export const InfoContext = createContext();


const laptopInfo = require("../img/how-it-works/laptop.png");
const newspaper = require("../img/how-it-works/newspaper.png");
const bluePrint = require("../img/how-it-works/blue-print.png");


const InfoContextProvider = (props) => {

    const content = [{ name: "delivery", img: laptopInfo, index: 0 }, 
                    { name: "content", img: newspaper, index: 1 }, 
                    { name: "resources", img: bluePrint, index: 2 }];

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