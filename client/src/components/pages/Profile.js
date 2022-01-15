import { get } from "../../utilities.js";
import React, { useState, useEffect } from "react";

const Profile = (props) => {
    const [counter, setCounter] = useState(0);
    const [user, setUser] =  useState();

    useEffect(() => {
        document.title = "Profile";
        get(`/api/profile`, { id: props.googleid }).then((userObj) => setUser(userObj));
    }, []);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    if (!profile) {
        return (<div>Profile</div>)
    }

    return (
        <>
            <div>
                <div>{props.user.avatarURL}</div>
                <div>{props.user.name}</div>
                <div>
                    <div onclick="location.href='/edit-profile/'" type="button">Edit Profile</div>
                </div>
            </div>
            <div>
                <div>Bubble Count:</div>
                <div>{props.user.counter}</div>
            </div>
            <div>
                <div>Contacts</div>
                <span>{props.contact.friend}</span>
                <span>{props.contact.romantic}</span>
                <span>{props.contact.professional}</span>
                <span>{props.contact.undecided}</span>
            </div>
        </>
    )
}

export default Profile;