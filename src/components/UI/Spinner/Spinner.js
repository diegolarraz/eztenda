import React from "react";
import classes from "./Spinner.module.css";

const Spinner = () => (
  <div className={classes.Container}>
    <div className={classes.Spinner}>Loading...</div>
  </div>
);

export default Spinner;
