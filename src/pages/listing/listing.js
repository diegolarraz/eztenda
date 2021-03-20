import React from "react";
import { useParams } from "react-router-dom";

const Listings = () => {
  const { id } = useParams();

  return <h1>This is the listing page for - {id}</h1>;
};

export default Listings;
