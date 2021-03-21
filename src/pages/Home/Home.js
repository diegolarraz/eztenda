import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import beer from "../../assets/beer.svg";
import "./HomePage.css";
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
      <NavLink to={`listings/${listing.id}`} key={listing.id}>
        <ListingCard
          unitType={listing.unit_type}
          description={listing.description}
          category={listing.category}
          minBid={listing.min_bid}
        />
      </NavLink>
    );
  });

  return (
    <div className="Section-Container m-auto">
      <div className="Hero-Container">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-bold Hero-title">
            A great deal{" "}
            <span className="border-bottom Hero-title text-7xl font-bold ">
              better
            </span>
          </h1>
          <p className="mt-14 mb-14 font-thin Hero-insert">
            An online auction where bars can tender their listings and deals and
            drinks brands can bid for them.
          </p>
          <Button />
        </div>
        <img src={beer} className="Beer-svg" alt="beer svg"></img>
      </div>
      <h2 className="deals">Latest Deals</h2>
      <section className="grid">{listingsArr}</section>
    </div>
  );
}
