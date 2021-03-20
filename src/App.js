// import logo from "./logo.svg";
import React, { useContext } from "react";

import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home/Home";
import Listings from "./pages/Listings/Listings";
import Listing from "./pages/Listing/Listing";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { userData } = useContext(AuthContext);
  const { isLoggedIn } = userData;

  let routes = (
    <Switch>
      <Route path="/listings/:id" component={Listing} />
      <Route path="/listings" component={Listings} />
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/listings/:id" component={Listing} />
        <Route path="/listings" component={Listings} />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div className="App">
      <Navigation />
      <Switch>{routes}</Switch>
    </div>
  );
}

export default App;
