//importing axios
import axios from "axios";

//importing the useRef hook from react;
import { useRef } from "react";

//importing the register css file
import "./register.css";

//importing useHistory
import { useHistory } from "react-router";

export default function Register() {
    const username = useRef(); //useRef hook for the username input
    const email = useRef(); //useRef hook for the email input
    const password = useRef(); //useRef hook for the password input
    const passwordAgain = useRef(); //useRef hook for the password again input
    const history = useHistory(); //useHistory hook for the history object

    //creating a function to handle the submit button click
    const handleClick = async (e) => {
        e.preventDefault(); //preventing the default action of the submit button click or refreshing of the page

        //checking if the password is the same as the password again
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!")
        }
        //else if everthing is ok, then we are creating the user
        else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };
            try {
                await axios.post("/auth/register", user); //posting the user to the server
                history.push("/login"); //redirecting to the login page
            } catch (err) {
                console.log(err); //logging the error
            }
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SauravSocial</h3>
                    <span className="loginDesc">
                        Open the door for a social living and Tap into the power of social media
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick} >
                        <input
                            placeholder="Username"
                            required
                            ref={username}
                            className="loginInput"
                        />
                        <input
                            placeholder="Email"
                            required
                            ref={email}
                            className="loginInput"
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            required
                            ref={password}
                            className="loginInput"
                            type="password"
                            minLength="6"
                        />
                        <input
                            placeholder="Password Again"
                            required
                            ref={passwordAgain}
                            className="loginInput"
                            type="password"
                        />
                        <button className="loginButton" type="submit">
                            Sign Up
                        </button>
                        <button className="loginRegisterButton">
                            Log into Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}