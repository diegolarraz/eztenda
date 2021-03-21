import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../axiosInstances";

const Listing = () => {
  const [listing, setListing] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await api.get(`/listings/${id}`);
        setListing(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getListings();
  }, []);

  console.log(listing.category);


  return (
    <>
      
    </>
  );
};

export default Listing;
