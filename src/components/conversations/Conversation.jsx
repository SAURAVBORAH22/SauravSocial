//importing the conversation css file
import "./conversation.css"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Conversation({ conversation, currentUser }) {
    //creating a useState hook for user
    const [user, setUser] = useState(null);

    //public folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    //creating a useEffect hook for friendId
    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id); //getting the friend id

        const getUser = async () => {
            //try and catch block to handle the error
            try {
                const res = await axios("/users?userId=" + friendId); //getting the user details
                setUser(res.data); //setting the user in the state
            } catch (err) {
                console.log(err); //logging the error
            }
        };
        getUser();
    }, [currentUser, conversation]); //dependencies

    return (
        <div className="conversation">
            <img
                className="conversationImg"
                src={
                    user?.profilePicture
                        ? PF + user.profilePicture
                        : PF + "person/noAvatar.png"
                }
                alt=""
            />
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}
