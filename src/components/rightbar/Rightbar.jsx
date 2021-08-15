//calling rightbar.css
import "./rightbar.css"
//importing Users
import { Users } from "../../dummyData"
//importing Online
import Online from "../online/Online";

//creating Rightbar component
export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Saurav Borah</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <u1 className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                     ))}
                </u1>
            </div>
        </div>
    );
}