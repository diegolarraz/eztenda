import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

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
      <NavigationItem handleClick={handleClick} link="/listings">
        Listings
      </NavigationItem>
      <NavigationItem handleClick={handleClick} link="/profile">
        Profile
      </NavigationItem>
      <NavigationItem handleClick={handleClick} link="/logout">
        Logout
      </NavigationItem>
    </>
  ) : (
    <>
      <NavigationItem handleClick={handleClick} link="/listings">
        Listings
      </NavigationItem>
      <NavigationItem handleClick={handleClick} link="/login">
        Login
      </NavigationItem>
      <NavigationItem handleClick={handleClick} link="/signup">
        Sign up
      </NavigationItem>
    </>
  );

  return (
    <nav className={classes.Container}>
      <Link to="/">
        <img src={eztendaLogo} alt="eztenda logo" className={classes.Img} />
      </Link>
      <div className={hamburgerClasses} onClick={handleClick}>
        <span className={classes.Line}></span>
        <span className={classes.Line}></span>
        <span className={classes.Line}></span>
      </div>

      <ul className={navigationLinksClasses}>{navigationLinks}</ul>
    </nav>
  );
}
