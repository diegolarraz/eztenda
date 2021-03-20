import React from "react";
import { useParams } from "react-router-dom";

const Listing = () => {
  const { id } = useParams();
  console.log(useParams());


  return <h1>This is the listing page for - {id}</h1>;
};

export default Listing;
