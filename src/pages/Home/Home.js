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
            A great deal <span className="border-bottom">better</span>
          </h1>
          <p className="mt-14 mb-14 font-thin Hero-insert">
            An online auction where bars can tender their listings and deals and
            drinks brands can bid for them.
          </p>
          <Button />
        </div>
        <img src={beer} className="Beer-svg" alt="beer svg"></img>
      </div>
      <div>
        <div className="Heading-Background h-96 w-3/4 flex justify-center m-auto items-end text-center rounded-3xl relative">
          <blockquote className="text-7xl font-bold w-3/6 absolute -bottom-8">
            Latest Deals
          </blockquote>
        </div>
        <section className="grid">{listingsArr}</section>
      </div>
    </div>
  );
}
