//creating our actions 

//creating the loginstart actions 
export const LoginStart = (userCredentials) => ({
    type: 'LOGIN_START',
});

//creating the login success actions
export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',  //if successful login is made
    payload:user, //passing the user object to the store
});

//creating the login failure actions
export const LoginStart = (error) => ({
    type: 'LOGIN_FAILURE', //if unseccessful login is made
    payload:error, //error message
});
