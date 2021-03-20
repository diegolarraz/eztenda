// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import Home from "./pages/home/home";
import Listings from "./pages/listings/listings";
import Profile from "./pages/profile/profile";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/listings" component={Listings} />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
