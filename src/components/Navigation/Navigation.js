import React, { useState, useContext } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { AuthContext } from "../../context/AuthContext";

import classes from "./Navigation.module.css";

import eztendaLogo from "../../assets/eztenda-logo.png";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { userData } = useContext(AuthContext);
  const { isLoggedIn } = userData;

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navigationLinksClasses = menuOpen
    ? `${classes.Links} ${classes.LinksActive}`
    : classes.Links;

  const hamburgerClasses = menuOpen
    ? `${classes.Hamburger} ${classes.Active}`
    : classes.Hamburger;

  const navigationLinks = isLoggedIn ? (
    <>
      <NavigationItem link="/listings">Listings</NavigationItem>
      <NavigationItem link="/profile">Profile</NavigationItem>
      <NavigationItem link="/logout">Logout</NavigationItem>
    </>
  ) : (
    <>
      <NavigationItem link="/listings">Listings</NavigationItem>
      <NavigationItem link="/login">Login</NavigationItem>
      <NavigationItem link="/signup">Sign up</NavigationItem>
    </>
  );

  return (
    <nav className={classes.Container}>
      <NavigationItem link="/">
        <img src={eztendaLogo} alt="eztenda logo" className={classes.Img} />
      </NavigationItem>
      <div className={hamburgerClasses} onClick={handleClick}>
        <span className={classes.Line}></span>
        <span className={classes.Line}></span>
        <span className={classes.Line}></span>
      </div>

      <ul className={navigationLinksClasses}>{navigationLinks}</ul>
    </nav>
  );
}
