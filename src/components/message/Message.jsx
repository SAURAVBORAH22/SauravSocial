//importing the message css file
import "./message.css"

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://filmyhotspot.com/wp-content/uploads/2020/12/39e611e5-870c-4c6d-97a1-e7c9ee51a97b.jpg"
                    alt=""
                />
                <p className="messageText" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}
