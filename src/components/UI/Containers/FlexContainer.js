import React from "react";

import classes from "./FlexContainer.module.css";

function flexContainer(WrappedComponent, props) {
  return (
    <section className={classes.FlexContainer}>
      <WrappedComponent {...props.children} />
    </section>
  );
}

export default flexContainer;
