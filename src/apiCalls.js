//importing axios 
import axios from 'axios';

// calling our login API
export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: 'LOGIN_START' }); // start the login process
    // calling our login API
    try {
        const res = await axios.post("auth/login", userCredential);
        //if successful then dispatching success action
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data }); //login is successful and now it can access our data
    } catch (err) {
        //if error then dispatching error action
        dispatch({ type: 'LOGIN_FAILURE', payload: err }); //login is unsuccessful
    }
};