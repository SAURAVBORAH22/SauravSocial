import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";


export default function Rightbar({ user }) {
  //defining the PF object
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //creating a useState hook for friends
  const [friends, setFriends] = useState([]);
  //fetching the current user
  const { user: currentUser, dispatch } = useContext(AuthContext);
  //checking whether we follow this use or not
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );


  //creating a useEffect hook
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id); //getting the friends list
        setFriends(friendList.data); //setting the friends list
      } catch (err) {
        console.log(err);
      }
    };
    getFriends(); //calling the getFriends function
  }, [user]);

  //defining the handleClick function
  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        }); //unfollowing the user
        dispatch({ type: "UNFOLLOW", payload: user._id }); //unfollowing the user
      }
      else {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        }); //following the user
        dispatch({ type: "FOLLOW", payload: user._id }); //following the user
      }
    } catch (err) {
      console.log(err); //logging the error
    }
    setFollowed(!followed); //updating the state
  }

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            {/* adding realtionship status ..if status is 1 then Single , if 2 then Married , else blank */}
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={friend.profilePicture
                    ? PF + friend.profilePicture
                    : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* if there is profile then add profile right bar else add home right bar */}
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}