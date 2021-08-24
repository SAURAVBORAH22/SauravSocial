//importing the createContext
import { createContext, useReducer } from "react";

//importing our reducer
import { AuthReducer } from "./AuthReducer";

//defining the INITIAL_STATE constant
const INITIAL_STATE = {
    user: null, //user is null at the beginning
    isFetching: false, //we are not fetching anything at the beginning
    error: false  // there's no error at the beginning
};

//defining the ACTION_TYPES constant
export const AuthContext = createContext(INITIAL_STATE);

//creating a wrapper
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); //we are using the reducer to get the state and dispatch

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};