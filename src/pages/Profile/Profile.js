import classes from "./index.module.css";
import React, {useState} from "react";
import BgDesktop from '../../assets/circlesDesktop.svg'
import BgMobile from '../../assets/circlesMobile.svg'
import Arrow from '../../assets/down-arrow.svg'
import ListingCard from "../../components/listingCard/listingCard";
const Profile = () => {
    const [dropDown, setDropDown] = useState(0);

    const handleDropdown = (index) => {
        console.log(index);
        if (index === 0) {
            setDropDown(0);
        } else {
            setDropDown(index);
        }
    }

    return (
        <>
            <img src={BgDesktop} className={classes.desktopImg} alt=""/>
            <img src={BgMobile} className={classes.mobileImg} alt=""/>
            <div className={classes.ProfilePage}>
                
                <h1 className={classes.PageTitle}>Profile</h1>
                <div className={classes.ProfileImage}></div>
                <p>edit</p>
                <br/>
                <div className={classes.Account}>
                    <h1>Account</h1>
                    <br/><br/>
                    <h2>name</h2>
                    <p className={classes.compName}>GAUCHO</p>
                    <br/><br/>
                    <h2>email</h2>
                    <p className={classes.compName}>boozygang@booze.com</p>
                    <br/><br/>
                    <h2>address</h2>
                    <p className={classes.compName}>138 Baker St</p>
                    <br/><br/>
                    <h2>description</h2>
                    <p className={classes.compName}>jbfhabdsfhbdshfjd</p>
                </div>
                <br/><br/>
                <div className={classes.Dropdown}>
                    <div className={classes.headings} onClick={dropDown === 1 ? () => handleDropdown(0) : () => handleDropdown(1)}>
                        <h1>Active listings</h1>
                        <img src={Arrow} alt=""/>
                    </div>
                    <div className={classes.activeContent}>
                        {dropDown === 1 ? <ListingCard /> : ""}
                    </div>
                </div>
                <br/><br/>
                <div className={classes.Dropdown}>
                    <div className={classes.headings} onClick={dropDown === 2 ? () => handleDropdown(0) : () => handleDropdown(2)}>
                        <h1>Past listings</h1>
                        <img src={Arrow} alt=""/>
                    </div>
                    <div className={classes.activeContent}>
                        {dropDown === 2 ? <ListingCard /> : ""}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
