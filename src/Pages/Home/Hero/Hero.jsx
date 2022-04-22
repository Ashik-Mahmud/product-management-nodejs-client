import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Search Your Product Here</h2>
            <div className="search">
              <input type="search" placeholder="Search Your Product" />
              <button className="btn btn-primary">Search</button>
            </div>
            <ul className="search-history">
              <span>People Search - </span>
              <li>Laptop</li>
              <li>Accessories</li>
              <li>Headphone</li>
              <li>Computer</li>
              <li>Airbud</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
