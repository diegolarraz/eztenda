import React, { useState } from 'react';
import classes from './index.module.css';

const BidCard = ({amount,id,selected,sweetner, bid_user, setAcceptedBid}) => {
    const [accept, setAccept] = useState(false);

    const handleAccept = () => {
        setAccept(true);
        alert("Would you like to confirm this bid?")
        setAcceptedBid(id);
    }
    return (
        <>
            <div className={classes.BidCard}>
                <div className={classes.bidLeft}>
                    <p className={classes.prize}>£{amount}</p>
                    <p>{sweetner}</p>   
                    {accept ? <button className={classes.accepted}>accepted</button> : <button className={classes.accept} onClick={() => handleAccept()}>accept</button>}
                </div>
                <div className={classes.bidRight}>
                    <div className={classes.compPic}>
                        <img src={bid_user.picture} />
                    </div>
                    <p>{bid_user.company_name}</p>
                </div>
            </div>
        </>
    );
};

export default BidCard;
