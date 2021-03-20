// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home/Home";
import Listings from "./pages/Listings/Listings";
import Listing from "./pages/Listing/Listing";
import Profile from "./pages/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/listings/:id" component={Listing} />
        <Route path="/listings" component={Listings} />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
