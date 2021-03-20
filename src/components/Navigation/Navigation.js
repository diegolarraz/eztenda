import React from "react";
// import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

import eztendaLogo from "../../assets/eztenda-logo.png";

const navigationItems = () => (
  <nav>
    <img src={eztendaLogo} alt="eztenda logo" />

    <ul>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/listings">Listings</NavigationItem>
      <NavigationItem link="/profile">Profile</NavigationItem>
    </ul>
  </nav>
);

export default navigationItems;
