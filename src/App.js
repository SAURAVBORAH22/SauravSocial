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
  Link
} from "react-router-dom";

function App() {
  return (
    // Routes
    <Router>
      {/* switching between different routes */}
      <Switch>
        {/* Different Routes */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
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
