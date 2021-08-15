//importing the feed.css
import './feed.css';
//importing Share.jsx
import Share from '../share/Share';
//importing the post.jsx
import Post from '../post/Post';
//importing Posts from dummyData
import { Posts } from "../../dummyData";

//creating the feed component
export default function Feed() {
    return (
        <div className="feed">
            {/* wrapping up the feed */}
            <div className="feedWrapper">
                {/* showing the share component */}
                <Share />
                {Posts.map(p => { //mapping the posts
                    <Post post={p}/>//returning the post
                })}
            </div>
        </div>
    )
}
