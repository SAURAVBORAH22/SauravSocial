//importing css file
import "./closeFriend.css"

export default function CloserFriend({user}) {
    //defining the PF object
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            {/* friend image */}
            <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
            {/* friend name */}
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
}