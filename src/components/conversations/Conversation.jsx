//importing the conversation css file
import "./conversation.css"

export default function Conversation() {
    return (
        <div className="conversation">
            <img
                className="conversationImg"
                src="https://cdn.vox-cdn.com/thumbor/TtgZV0XliAVs_eEKe6EbMnkBlOI=/0x0:2000x1333/1400x1400/filters:focal(686x372:1006x692):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53195715/JohnWicksHorribleHair.0.jpg"
                alt=""
            />
            <span className="conversationName">John Wick</span>
        </div>
    )
}
