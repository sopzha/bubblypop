import React, {useEffect, useState} from "react";
import { get } from "../../utilities";

/*import BubbleCounter from "./BubbleCounter.js"; 
import SocialMediaBlock from "./SocialMediaBluck.js"; */
import Status from "./Status.js";
import Avatar from "./Avatar.js";
// import Contact from "./Contact.js";
import ContactCard from "./ContactCard.js";

import "./ProfileCard.css";
import "../../utilities.css";
import "./Status.css";


function OtherProfileCard(props) {
    const [testvar, setTestvar] = useState([]);
    
    const [avatar, setAvatar] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        get("/api/profile", { parent: props.avatarURL, parent: props.status }).then((avatar, status) => {
            setAvatar(avatar);
            setStatus(status);
        });
    }, []);

    const updateStatus = (statusUpdate) => {
        setStatus(statusUpdate);
    };

    const popupFunction = () => {
        var popup = document.getElementById("phonePopup");
        popup.classList.toggle("show");
    }

    function togglePopup() {
        if (document.getElementById("phonePopup").style.display === "block") {
            document.getElementById("phonePopup").style.display = "none";
        } else {
            document.getElementById("phonePopup").style.display="block";
        }
        
    }

    // TEST
/*     let element = ["hello"];

    let newArray = element.concat(props.contacts);
 */
    // if (hasContacts) {
    //     contactsList = contacts.map((contactObj) => (
    //         <Dropdown.Item key = {`Contact_${contactObj._id}`}> 
    //             {contactObj._id}
    //         </Dropdown.Item>
    //     ));
    //     } else {
    //         contactsList = <Dropdown.Item> No contacts yet :( </Dropdown.Item>
    //     }
        
    return (
        
        <div className="columnContainer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="columnItem rowContainer">
                <br></br>
                    <Avatar
                        userId={props.userId}
                        avatarURL={props.avatarURL} 
                        className="rowItem"/>
                <h1 className = "nameText">{props.name}</h1>
                <Status
                    content={props.status}
                    className="rowItem"/>
                &nbsp;
                <div>
                    <a href={props.linkedInURL} target="_blank" className="fa fa-linkedin"></a>
                    <a href={props.facebookURL} target="_blank" className="fa fa-facebook"></a>
                    <a href={props.instagramURL} target="_blank" className="fa fa-instagram"></a>
                    <a title={props.phoneNumber} className="fa fa-phone" onClick= {togglePopup}></a>
                    <span className = "popup" id = "phonePopup"> 
                        {props.phoneNumber}
                    </span>
                </div>
            </div>
            <div className="columnItem rowContainer">
                <div><h1 className = "sectionTitle">Bubble Counter:</h1></div>
                <div className = "bubbleCounterContainer">
                    <div className = "bubbleCounterText">
                        {props.bubbleCount}
                    </div>
                </div>
                <div>
                    <h1 className = "sectionTitle">Contacts:</h1> 
                    <div className = "statusText">
                        {props.name} has {props.bubbleCount} hidden contacts!
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default OtherProfileCard;