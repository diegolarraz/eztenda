import React from "react";
import beer from "../../assets/beer.svg";



const Home = () => {
  return (
    <div>
      <div>
        <h1>
          A great deal better
        </h1>
        <p>
        An online auction where bars can tender their listings and deals and drinks brands can bid for them.
        </p>
      </div>
      <img src={beer}></img>

      
    </div>
  );
};

export default Home;
