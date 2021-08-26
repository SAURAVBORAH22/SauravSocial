//import useEffect
import { useEffect } from "react";
//importing the createContext
import { createContext, useReducer } from "react";

//importing our reducer
import AuthReducer from "./AuthReducer";

//defining the INITIAL_STATE constant
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

//defining the ACTION_TYPES constant
export const AuthContext = createContext(INITIAL_STATE);

//creating a wrapper
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); //we are using the reducer to get the state and dispatch

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};