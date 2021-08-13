//importing the feed.css
import './feed.css';
//importing Share.jsx
import Share from '../share/Share';
//importing the post.jsx
import Post from '../post/Post';

//creating the feed component
export default function Feed() {
    return (
        <div className="feed">
            {/* wrapping up the feed */}
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
