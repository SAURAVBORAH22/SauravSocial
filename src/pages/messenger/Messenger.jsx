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

    //creating a useState hook for currentChat
    const [currentChat, setCurrentChat] = useState(null);

    //creating a useState hook for messages
    const [messages, setMessages] = useState([]);

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


    //creating a useEffect hook for getting messages
    useEffect(() => {
        const getMessages = async () => { //getting the messages
            //try catch block
            try {
                const res = await axios.get("/messages/" + currentChat?._id); //getting the messages
                setMessages(res.data); //setting the messages
            } catch (err) {
                console.log(err); //logging the error
            }
        };
        getMessages(); //calling the getMessages function
    }, [currentChat]); //dependencies


    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for Friends" className="chatMenuInput" />
                        {conversations.map((c) => ( //mapping the conversations
                            <div onClick={() => setCurrentChat(c)} >
                                <Conversation conversation={c} currentUser={user} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ? (
                                <>
                                    <div className="chatBoxTop">
                                        {messages.map(m => (
                                            <Message message={m} own={m.sender === user._id} />
                                        ))}

                                    </div>
                                    <div className="chatBoxBottom">
                                        <textarea className="chatMessageInput" placeholder="Write Something ..."></textarea>
                                        <button className="chatSubmitButton" >Send</button>
                                    </div>
                                </>
                            ) : (<span className="noConversationText" >
                                Open a conversation to start a Chat.
                            </span>
                            )
                        }
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
