//importing the chatOnline css
import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css"

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    //creating a useState hook for friends
    const [friends, setFriends] = useState([]); //array of friends

    //creating a useState hook for onlineFriends
    const [onlineFriends, setOnlineFriends] = useState([]); //array of online friends

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; //public folder

    //fetching every following
    useEffect(() => {
        const getFriends = async () => { //async function to get friends
            const res = await axios.get("/users/friends/" + currentId); //getting the friends
            setFriends(res.data); //setting the friends
        };
        getFriends(); //calling the function
    }, [currentId]);

    //useEffect hook for online friends 
    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id))); //setting the online friends
    }, [friends, onlineUsers]);

    return (
        <div className="chatOnline" >
            {onlineFriends.map(o => (
                <div className="chatOnlineFriend">
                    <div className="chatOnlineImgContainer">
                        <img
                            className="chatOnlineImg"
                            src={
                                o?.profilePicture
                                    ? PF + o.profilePicture
                                    : PF + "person/noAvatar.png"
                            }
                            alt=""
                        />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName">{o?.username}</span>
                </div>
            ))}
        </div>
    )
}
