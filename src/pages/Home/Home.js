import React from "react";
import beer from "../../assets/beer.svg";
import "./HomePage.css";
import Button from "../../components/Button/BrandButton.js"



const Home = () => {
  return (
    <div className="Hero-container m-auto">
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-bold Hero-title">
          A great deal <span className="border-bottom">better</span>
        </h1>
        <p className="mt-9 mb-9 font-thin Hero-insert">
        An online auction where bars can tender their listings and deals and drinks brands can bid for them.
        </p>  
        <Button />
      </div>
      <img src={beer} className="Beer-svg"></img>
    </div>
  );
};

export default Home;
