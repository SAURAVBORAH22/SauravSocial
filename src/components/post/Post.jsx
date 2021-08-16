//calling post.css
import "./post.css"
//importing @material-ui/icons
import { MoreVert } from '@material-ui/icons'
//importing Users from dummyData
import { Users } from "../../dummyData";

//imporing useState
import {useState} from "react";

export default function Post({ post }) {
    //using usestate hook to add like functionaity
    const [like, setLike] = useState(post.like);//like is the like count

    //creating a isLiked useState hook to check if the user has liked the post
    const [isLiked, setIsLiked] = useState(false);//isLiked is the boolean value

    //creating a folder url
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
                        <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    {/* showing post description */}
                    {/* show if post has description */}
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF+post.photo} alt="" />
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