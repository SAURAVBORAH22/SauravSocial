//importing the login css file
import "./login.css"

//importing the useRef hook 
import { useRef } from 'react';

export default function Login() {
    //using the useRef hook for the email
    const email = useRef();
    //using the useRef hook for the password
    const password = useRef();
    
    // defining the function for submit button for the login form
    const handleClick = (e) => {
        e.preventDefault(); // preventing the default action of the submit button or the refreshing of the page
        console.log(email.current.value, password.current.value);
    }

    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SauravSocial</h3>
                    <span className="loginDesc">
                    Open the door for a social living and Tap into the power of social media
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox"  onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required className="loginInput" ref={password} />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}