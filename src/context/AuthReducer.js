//creating the reducers

//creating AuthReducer
const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START': //for login start it will return the below 
            return {
                user: null, //user will be null at beginning
                isFetching: true, // isFetching will be true at beginning
                error: false, //no error will be there at beginning
            };
        case 'LOGIN_SUCCESS': //for login success it will return the below
            return {
                user: action.payload, //user will be set to the user that is fetched
                isFetching: false, // nothing will be fetched 
                error: false, //the won't be any error
            };
        case 'LOGIN_FAILURE': //for login failure it will return the below
            return {
                user: null, //user will be null
                isFetching: false, // nothing will be fetched
                error: action.payload, //there will be an error
            };
        case 'FOLLOW': //for follow it will return the below
            return {
                ...state, //it will return the state
                user: {
                    ...state.user, //it will return the user
                    followings: [...state.user.followings, action.payload], //it will add the followings
                },
            };
        case 'UNFOLLOW': //for unfollow it will return the below
            return {
                ...state, //it will return the state
                user: {
                    ...state.user, //it will return the user
                    followings: state.user.followings.filter(
                        (following) => following.id !== action.payload
                    ), //it will remove the unfollowing
                },
            };
        default:
            return state; //by default it will return the state

    }
};


//exporting this reducer
export default AuthReducer;