//importing css file
import "./closeFriend.css"

export default function CloserFriend({user}) {
    return (
        <li className="sidebarFriend">
            {/* friend image */}
            <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
            {/* friend name */}
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
}