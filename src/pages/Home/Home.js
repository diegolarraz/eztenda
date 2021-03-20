import React from "react";
import beer from "../../assets/beer.svg";
import "./HomePage.css";
import Button from "../../components/Button/BrandButton.js"
import ListingCard from "../../components/listingCard/listingCard";



const Home = () => {
  return (
    <div className="Section-Container m-auto">
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-bold Hero-title">
          A great deal <span className="border-bottom">better</span>
        </h1>
        <p className="mt-14 mb-14 font-thin Hero-insert">
        An online auction where bars can tender their listings and deals and drinks brands can bid for them.
        </p>  
        <Button />
      </div>
      <img src={beer} className="Beer-svg"></img>
      <ListingCard />
    </div>
  );
};

export default Home;
