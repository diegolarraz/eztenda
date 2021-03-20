import React, { Component } from "react";
// import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";

import eztendaLogo from "../../assets/eztenda-logo.png";

class Navigation extends Component {
  state = {
    menuOpen: false,
  };

  handleClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    let navigationLinksClasses = this.state.menuOpen
      ? `${classes.Links} ${classes.LinksActive}`
      : classes.Links;

    let hamburgerClasses = this.state.menuOpen
      ? `${classes.Hamburger} ${classes.Active}`
      : classes.Hamburger;

    return (
      <nav className={classes.Container}>
        <NavigationItem link="/">
          <img src={eztendaLogo} alt="eztenda logo" className={classes.Img} />
        </NavigationItem>
        <div className={hamburgerClasses} onClick={this.handleClick}>
          <span className={classes.Line}></span>
          <span className={classes.Line}></span>
          <span className={classes.Line}></span>
        </div>

        <ul className={navigationLinksClasses}>
          <NavigationItem link="/listings">Listings</NavigationItem>
          <NavigationItem link="/profile">Profile</NavigationItem>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
