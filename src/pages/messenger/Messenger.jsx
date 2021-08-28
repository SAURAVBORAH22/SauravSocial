//importing the messenger css file
import "./messenger.css";
//importing Topbar
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

//importing socket io client
import { io } from "socket.io-client";

export default function Messenger() {

    //creating a useState hook for conversations
    const [conversations, setConversations] = useState([]);

    //creating a useState hook for currentChat
    const [currentChat, setCurrentChat] = useState(null);

    //creating a useState hook for messages
    const [messages, setMessages] = useState([]);

    //creating a useState hook for newMessage
    const [newMessage, setNewMessage] = useState("");

    //creating a useState hook for socket
    const [socket, setSocket] = useState(null);

    //checking our current user after the login process
    const { user } = useContext(AuthContext);

    //creating a scrollRef
    const scrollRef = useRef();


    //creating a useEffect hook for setting the socket and listening to the socket
    useEffect(() => {
        //setting the socket
        setSocket(io("ws://localhost:8900"));
    },[]);

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


    //defining the handleSubmit function   
    const handleSubmit = async (e) => {
        e.preventDefault(); //preventing the default behaviour or the refreshing of the page
        const message = {
            sender: user._id, //setting the sender
            text: newMessage, //setting the text
            conversationId: currentChat._id //setting the conversation id
        };
        //try catch block
        try {
            const res = await axios.post("/messages", message); //posting the message
            setMessages([...messages, res.data]); //adding the new messages to chat box 
            setNewMessage(""); //setting the new message to empty       
        } catch (err) {
            console.log(err); //logging the error
        }
    };

    //creating a useEffect hook for scrolling the chat box
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" }); //scrolling the chat box
    }, [messages]);

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
                                            <div ref={scrollRef} >
                                                <Message message={m} own={m.sender === user._id} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="chatBoxBottom">
                                        <textarea
                                            className="chatMessageInput"
                                            placeholder="Write Something ..."
                                            onChange={(e) => setNewMessage(e.target.value)} //setting the newMessage
                                            value={newMessage} //setting the newMessage
                                        ></textarea>
                                        <button className="chatSubmitButton" onClick={handleSubmit} >
                                            Send
                                        </button>
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
