//calling sidebar.css
import './sidebar.css';

//calling material-ui/icons
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@material-ui/icons';

//creating sidebar component
export default function Sidebar() {
    return (
        // sidebar component
        <div className="sidebar">
            {/* creating sidebarwarpper */}
            <div className="sidebarWrapper">
                {/* creating sidebar list */}
                <ul className="sidebarList">
                    {/* creating sidebar list items */}
                    <li className="sidebarListItem">
                        {/* creating sidebar icon */}
                        <RssFeed className="sidebarIcon" />
                        {/* creating side bar list item text */}
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                {/* creating a sidebar button to show more content */}
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                {/* creating a side bar friend list */}
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                    <li className="sidebarFriend">
                        {/* friend image */}
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        {/* friend name */}
                        <span className="sidebarFriendName">Ramesh Kumar</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}