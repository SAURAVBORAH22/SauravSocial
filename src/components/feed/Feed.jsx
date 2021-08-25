//importing the feed.css
import './feed.css';
//importing Share.jsx
import Share from '../share/Share';
//importing the post.jsx
import Post from '../post/Post';
// //importing Posts from dummyData
// import { Posts } from "../../dummyData";

//importing useState,useEffect,useContext from react
import { useState, useEffect, useContext } from 'react';

//import axios
import axios from 'axios';

//import AuthContext 
import { AuthContext } from '../../context/AuthContext';

//creating the feed component
export default function Feed({ username }) {

    //creating a useState hook for setting Posts
    const [posts, setPosts] = useState([]);

    //calling current user
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            //axios is used for fetching the posts
            const res = username
                ? await axios.get("/posts/profile/" + username)
                : await axios.get("posts/timeline/" + user._id);
            setPosts(res.data);
        };
        fetchPosts();

    }, [username, user._id]) //adding dependency to the hook . the empty array at the end means that the hook will run only once

    return (
        <div className="feed">
            {/* wrapping up the feed */}
            <div className="feedWrapper">
                {/* showing the share component */}
                <Share />
                {posts.map((p) => ( //mapping the posts
                    <Post key={p._id} post={p} /> //passing the post to the post component
                ))}
            </div>
        </div>
    )
}
