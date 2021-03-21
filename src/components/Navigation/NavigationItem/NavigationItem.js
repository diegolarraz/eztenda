import React from "react";
import { NavLink } from "react-router-dom";

// import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li>
    <NavLink exact to={props.link} onClick={props.handleClick}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
