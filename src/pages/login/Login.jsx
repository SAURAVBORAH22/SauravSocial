//importing the login css file
import "./login.css"

//importing the useRef hook 
import { useContext, useRef } from 'react';

//impporting the loginCall
import { loginCall } from "../../apiCalls";

//importing AuthContext
import { AuthContext } from "../../context/AuthContext";

//importing Circular Progress
import { CircularProgress } from '@material-ui/core';

export default function Login() {
    //using the useRef hook for the email
    const email = useRef();
    //using the useRef hook for the password
    const password = useRef();
    //using the useContext hook for the auth object
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    // defining the function for submit button for the login form
    const handleClick = (e) => {
        e.preventDefault(); // preventing the default action of the submit button or the refreshing of the page
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };

    console.log(user);

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
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching} >
                            {isFetching ? <CircularProgress color="white" size="20px" /> : "Log In"}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress color="white" size="20px" /> : "Create a New Account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}