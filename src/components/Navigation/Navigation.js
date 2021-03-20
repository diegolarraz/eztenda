import React from "react";

// import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/listings">Listings</NavigationItem>
    <NavigationItem link="/profile">Profile</NavigationItem>
  </ul>
);

export default navigationItems;
