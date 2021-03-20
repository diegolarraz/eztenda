import React from 'react';
import classes from "./index.module.css";

const ListingCard = () => {

    return (
        <>
            <div className={classes.Card}>
                <div className={classes.CardTop}>
                    <div className={classes.CardImage}>
                    </div>
                    <div className={classes.CardText}>
                        <h1>GAUCHO</h1>
                        <p>Argentinian Restaurant</p>
                        <h2>Wine</h2>
                    </div>
                </div>
                <div className={classes.Bottom}>
                    <h1>£5,000</h1>
                </div>
            </div>
        </>
    );
}

export default ListingCard;

