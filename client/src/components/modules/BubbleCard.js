import React, {useEffect, useState} from "react";
import { get } from "../../utilities";

import Status from "./Status.js";
import Avatar from "./Avatar.js";

const BubbleCard = (props) => {
    const [avatar, setAvatar] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        get("/api/profile", { parent: props.avatarURL, parent: props.status}).then((avatar, status) => {
            setAvatar(avatar);
            setStatus(status);
        });
    }, []);

    const updateStatus = (statusUpdate) => {
        setAvatar(statusUpdate);
    };
    return (
        <div>
            <Avatar
                userId={props.userId}
                avatarURL={props.avatarURL}
            />
            <Status
                content={props.content}
            />

        </div>
    );
};