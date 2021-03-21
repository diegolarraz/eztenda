import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import api from "../../axiosInstances";
import BidCard from '../../components/BidCard/BidCard.js';
import classes from "./Listing.module.css";
import {AuthContext} from '../../context/AuthContext';

const Listing = () => {
  const [listing, setListing] = useState({})
  const {userData} = useContext(AuthContext);
  const [month, setMonth] = useState(1);
  const [location, setLocation] = useState("London");
  const email = userData.user;
  const [bids, setBids] = useState([]);
  const { id } = useParams();
  const [acceptedBid, setAcceptedBid] = useState(null);
  const [form, setForm] = useState({
    price: "",
    sweetner: ""
  })

  const {price, sweetner} = form;

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await api.get(`/listings/${id}`);
        setListing(response.data);
        setBids(response.data.bids)
      } catch (error) {
        console.log(error);
      }
    };
    getListings();
    setLocation(getLocations())
    setMonth(getMonth())
  }, []);

  useEffect(() => {
    if (acceptedBid !== null) {
      let selected = {};
      bids.map((bid) => {
        if (bid.id === acceptedBid) {
          setBids([bid])
        }
      })
    }
  }, [acceptedBid])

  const getMonth = () => {
    const months = [4, 5, 6, 8, 9, 12, 14, 24, 32];
    return months[Math.floor(Math.random() * months.length)]
  }

  const getLocations = () => {
    const locations = ["London", "Manchester", "Birmingham", "Leeds", "Bristol", "Liverpool", "Newcastle", "Leicester", "Southhampton", "Sheffield", "Norwich","Exeter", "Portsmouth"]
    return locations[Math.floor(Math.random() * locations.length)]
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async () => {
    const data = {
      price, sweetner, listingId: id
    }

    try {
      const response = await api.post(`/bids`);
      setListing(response.data);
      setBids(response.data.bids)
    } catch (error) {
      console.log(error);
    }
  }
  return (
      <>
        <div>
          <div className={classes.SectionTop}>
            <img src={listing.picture}></img>
          </div>
          <div className={classes.TextContainer}>
            <p className={classes.TextLight}>Description:</p>
            <p className={classes.ListingInfo}>{listing.description}</p>
            <p className={classes.TextLight}>Type:</p>
            <p className={classes.ListingInfo}>{listing.category}</p>
            <p className={classes.TextLight}>Length:</p>
            <p className={classes.ListingInfo}>{`${month} month contract`}</p>
            <p className={classes.TextLight}>Additional requirements:</p>
            <p className={classes.ListingInfo}>{listing.requirements}</p>
            <p className={classes.TextLight}>Location:</p>
            <p className={classes.ListingInfo}>{`${location}`}</p>
            <p className={classes.SubTitle}>Bids</p>
            {listing.bids && bids.map((props) => (<BidCard {...props} {...{setAcceptedBid}}/>))}
          <form className={classes.Form}>
            <p className={classes.SubTitle}>Submit a Bid</p>
              <br/>
            <label className={classes.Label}>Price</label>
            <input className={classes.Price} name="price"  type="number" value={price} onChange={handleChange}/>
            <label className={classes.Label}>Sweetner</label>
            <input className={classes.Price} name="sweetner" type="text" value={sweetner} onChange={handleChange}/>
            <br/><br/>
            <button className={classes.Submit} onClick={() => handleSubmit()}>Submit</button>
          </form>
          </div>
        </div>
      </>
  );
};

export default Listing;
