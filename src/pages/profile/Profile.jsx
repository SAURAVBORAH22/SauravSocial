import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

//importing useEffect and useState from react
import { useEffect, useState } from "react";

//importing axios
import axios from "axios";

//importing useParams hook from react-router
import { useParams } from "react-router"; 

export default function Profile() {
  //defining the PF object
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //creating a useState hook to setUser
  const [user, setUser] = useState({});
  //creating a useParams hook to getUser
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      //axios is used for fetching the posts
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                //if has cover picture then show cover picture else no cover image from local system
                src={user.coverPicture  || PF+"person/noCover.png"}
                alt=""
              /> 
              <img
                className="profileUserImg"
                src={user.profilePicture  || PF+"person/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}