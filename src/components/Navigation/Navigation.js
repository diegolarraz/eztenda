import React from "react";
// import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";

import eztendaLogo from "../../assets/eztenda-logo.png";

const navigationItems = () => (
  <nav className={classes.Navigation}>
    <NavigationItem link="/">
      <img
        src={eztendaLogo}
        alt="eztenda logo"
        className={classes.NavigationImg}
      />
    </NavigationItem>

    <ul className={classes.NavigationLinks}>
      <NavigationItem link="/listings">Listings</NavigationItem>
      <NavigationItem link="/profile">Profile</NavigationItem>
    </ul>
  </nav>
);

export default navigationItems;
