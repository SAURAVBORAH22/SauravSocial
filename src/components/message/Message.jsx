//importing the message css file
import "./message.css";

//importing format from timeago.js
import { format } from "timeago.js";

export default function Message({ message, own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://filmyhotspot.com/wp-content/uploads/2020/12/39e611e5-870c-4c6d-97a1-e7c9ee51a97b.jpg"
                    alt=""
                />
                <p className="messageText" >
                    {message.text}
                </p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}
