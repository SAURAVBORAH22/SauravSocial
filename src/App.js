//importing Home
import Home from './pages/home/Home'
//importing Login
import Login from './pages/login/Login';
//importing Profile
import Profile from './pages/profile/Profile';
//importing Register
import Register from './pages/register/Register';
//importing react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//importing useContext hook
import { useContext } from "react";
//importing the AuthContext 
import { AuthContext } from './context/AuthContext';

function App() {

  //calling the user
  const { user } = useContext(AuthContext);

  return (
    // Routes
    <Router>
      {/* switching between different routes */}
      <Switch>
        {/* Different Routes */}
        <Route exact path="/">
          {/* if there is user we go to home page else we shouldn't see the home page */}
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {/* if user is already logged in the we redirect user to home page else redirect to login page */}
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {/* if the user is already registered then go to home page else register page */}
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        {/* :username is a dynamic variable */}
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
