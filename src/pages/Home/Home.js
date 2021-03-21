import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import beer from "../../assets/beer.svg";
import "./Home.css";
import Button from "../../components/Button/BrandButton.js";
import ListingCard from "../../components/listingCard/listingCard";

import api from "../../axiosInstances";

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await api.get("/listings");
        const firstThree = response.data.slice(0, 3);
        setListings(firstThree);
      } catch (error) {
        console.log(error);
      }
    };

    getListings();
  }, []);

  const listingsArr = listings.map((listing) => {
    return (
      <Link to={`listings/${listing.id}`} key={listing.id}>
        <ListingCard
          unitType={listing.unit_type}
          description={listing.description}
          category={listing.category}
          minBid={listing.min_bid}
        />
      </Link>
    );
  });

  return (
    <main className="Container">
      <header className="Hero">
        <div>
          <h1 className="Hero-title">
            A great deal{" "}
            <span className="border-bottom Hero-title">better</span>
          </h1>
          <p className="Hero-insert">
            An online auction where bars can tender their listings and deals and
            drinks brands can bid for them.
          </p>
          <Link to="/listings">
            <Button />
          </Link>
        </div>
        <img src={beer} className="Beer-svg" alt="beer svg"></img>
      </header>
      <h2 className="deals">Latest Deals</h2>
      <section className="grid">{listingsArr}</section>
    </main>
  );
}
