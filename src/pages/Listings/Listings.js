import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import api from "../../axiosInstances";

import ListingCard from "../../components/listingCard/listingCard";

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await api.get("/listings");
        setListings(response.data);
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

  return <section className="grid padding--full">{listingsArr}</section>;
}

export default Listings;
