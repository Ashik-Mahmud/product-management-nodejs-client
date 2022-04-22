import React from "react";

const Product = () => {
  return (
    <div className="product">
      <div className="product-image">
        <img
          src="https://m.media-amazon.com/images/I/71IlDSwE3+L._AC_SL1500_.jpg"
          alt="product"
        />
      </div>
      <div className="product-details">
        <h3>Name goes here</h3>
        <div className="inner-details">
          <span className="colorize">54343 $</span>
          <span>Brand</span>
        </div>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
