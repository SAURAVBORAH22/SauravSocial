//importing the messenger css file
import "./messenger.css";
//importing Topbar
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Messenger() {

    //creating a useState hook for conversations
    const [conversations, setConversations] = useState([]);

    //checking our current user after the login process
    const { user } = useContext(AuthContext);
    console.log(user);

    //creating a useEffect hook
    useEffect(() => {
        //getting the conversations 
        const getConversations = async () => {
            //try and catch block
            try {
                const res = await axios.get("/conversations/" + user._id); //getting the conversations
                setConversations(res.data); //setting the conversations
            } catch (err) {
                console.log(err); //logging the error
            }
        };
        getConversations(); //calling the getConversations function
    }, [user._id]); //dependencies

    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for Friends" className="chatMenuInput" />
                        {conversations.map((c) => ( //mapping the conversations
                            <Conversation conversation={c} currentUser={user} /> //rendering the conversation
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message />
                            <Message own={true} />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="Write Something ..."></textarea>
                            <button className="chatSubmitButton" >Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}
