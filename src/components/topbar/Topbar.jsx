//calling the topbar css
import "./topbar.css"

//importing from @materialui/icons
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

//importing Link from react-router-dom
import { Link } from 'react-router-dom';
//importing useContext from react
import { useContext } from "react";
//importing AuthContext
import { AuthContext } from "../../context/AuthContext";
//creating the topbar component
export default function Topbar() {

    //choosing current user
    const { user } = useContext(AuthContext);
    //using public folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        // creating the topbar component
        <div className="topbarContainer">
            {/* creating the topbar header */}
            {/* left side of the topbar */}
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    {/* logo */}
                    <span className="logo">SauravSocial</span>
                </Link>
            </div>
            {/* right side of the topbar */}
            <div className="topbarCenter">
                {/* search icon */}
                <div className="searchbar">
                    <Search className="searchIcon" />
                    {/* input to Search */}
                    <input placeholder="Search for friends,posts or video" className="searchInput" />
                </div>
            </div>
            {/* right side of the topbar */}
            <div className="topbarRight">
                {/* links in topbar */}
                <div className="topbarLinks">
                    <span className="topbarLink">Hompage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                {/* top bar icons */}
                <div className="topbarIcons">
                    {/* topbar icon item */}
                    <div className="topbarIconItem">
                        <Person />
                        {/* topbar icon item for notification */}
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    {/* topbar icon item */}
                    <div className="topbarIconItem">
                        <Chat />
                        {/* topbar icon item for notification */}
                        <span className="topbarIconBadge">
                            2
                        </span>
                    </div>
                    {/* topbar icon item */}
                    <div className="topbarIconItem">
                        <Notifications />
                        {/* topbar icon item for notification */}
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    {/* profile picture */}
                    <img
                        src={
                            user.profilePicture
                                ? PF + user.profilePicture
                                : PF + "person/noAvatar.png"
                        }
                        alt=""
                        className="topbarImg"
                    />
                </Link>
            </div>
        </div>
    )
}