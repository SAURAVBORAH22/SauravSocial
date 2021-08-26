//importing the share.css 
import './share.css';
//importing from @material-ui/icon
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
//importing the usecontext hook from react
import { useContext, useRef, useState } from 'react';
//import AuthContext
import { AuthContext } from '../../context/AuthContext';
//importing axios
import axios from 'axios';

export default function Share() {

    //calling the current user
    const { user } = useContext(AuthContext);
    //defining the public folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    //adding description
    const desc = useRef();

    //using useState hook for file and setFile
    const [file, setFile] = useState(null);

    //creating submit Handler function
    const submitHandler = async (e) => {
        e.preventDefault(); //prevent default behaviour or the refreshing of the page
        //creating a new post 
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        //adding properties to the new post
        if (file) { //if there is a file
            const data = new FormData(); //creating a new FormData object
            const fileName = Date.now() + file.name; //adding the file name
            data.append("name", fileName); //adding the file name
            data.append("file", file); //adding the file
            newPost.img = fileName; //adding the image by indicating the file path which is the fileName
            console.log(newPost);
            //adding the try and catch block to handle the error
            try {
                await axios.post("/upload", data); //posting the file to the server
            } catch (err) { }
        }

        //sending the post
        //try and catch block
        try {
            await axios.post("/posts", newPost); //posting the post to the server
            window.location.reload(); //refreshing the page
        } catch (err) { }
    };

    return (
        <div className="share">
            {/* wrapping the share component in a container */}
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={
                            user.profilePicture
                                ? PF + user.profilePicture
                                : PF + "person/noAvatar.png"
                        }
                        alt=""
                    />
                    <input
                        placeholder={"What's in your mind " + user.username + "?"}
                        className="shareInput"
                        ref={desc} //ref is used to get the input value
                    />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={submitHandler} >
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input
                                style={{ display: "none" }} //hiding the input
                                type="file" //type is used to get the file
                                id="file" //id is used to get the file
                                accept=".png,.jpeg,.jpg" //accepting only images
                                onChange={(e) => setFile(e.target.files[0])} //setting the file hook
                            />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit" >Share</button>
                </form>
            </div>
        </div>
    )
}
