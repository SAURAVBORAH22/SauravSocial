//calling post.css
import "./post.css"
//importing @material-ui/icons
import { MoreVert } from '@material-ui/icons'
//importing Users from dummyData
// import { Users } from "../../dummyData";

//imporing useState
import { useState, useEffect } from "react";

//import axios
import axios from "axios";

//importing for format from timeago
import { format } from "timeago.js";

//importing Link
import { Link } from "react-router-dom";

export default function Post({ post }) {
    //using usestate hook to add like functionaity
    const [like, setLike] = useState(post.likes.length);//like is the like count

    //creating a isLiked useState hook to check if the user has liked the post
    const [isLiked, setIsLiked] = useState(false);//isLiked is the boolean value

    //creating a useState hook to setUser
    const [user, setUser] = useState({});

    //creating a folder url
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            //axios is used for fetching the posts
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();

    }, [post.userId]) //adding dependency to the hook . the empty array at the end means that the hook will run only once

    //creating the likeHandler function to handle the like button click
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);//if the user has liked the post then decrease the like count else increase the like count
        setIsLiked(!isLiked);//set the isLiked to the opposite value
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* The below link will take the user to the profile page on clicking the profile picture */}
                        <Link to={`profile/${user.username}`}>
                            {/* if has profile pricture show it else show default image */}
                            <img
                                className="postProfileImg"
                                src={user.profilePicture || PF + "person/noAvatar.png"}
                                alt="" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        {/* using timeago.js package for formatting the time 
                        refer to :- https://timeago.org/ */}
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    {/* showing post description */}
                    {/* show if post has description */}
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}