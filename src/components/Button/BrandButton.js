import React from "react";
import "../../components/Button/BrandButton.css";

const Button = (props) => {
  return (
    <a href={props.link} className="Brand-button">View Deals</a>
  );
};

export default Button;
