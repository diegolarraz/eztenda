import React from "react";
import classes from "./index.module.css";

const ListingCard = (props) => {
  return (
    <>
      <div className={classes.Card}>
        <div className={classes.CardTop}>
          <div className={classes.CardImage}></div>
          <div className={classes.CardText}>
            <h1>{props.unitType}</h1>
            <p>{props.description}</p>
            <h2>{props.category}</h2>
          </div>
        </div>
        <div className={classes.Bottom}>
          <h1>£{props.minBid}</h1>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
