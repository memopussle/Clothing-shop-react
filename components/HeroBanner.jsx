import React from "react";
import Navbar from "./Navbar";

const HeroBanner = () => {
 
  return (
    <div className="hero__img ">
      <Navbar />
      <header className="header-wrapper">
       
          <h1 className="header__text text-white ">SUSTAINABLE<br/>COLLECTION</h1>
        
       <button className="button standard-margin-top">SHOP NOW</button>
      </header>
    </div>
  );
};

export default HeroBanner;
