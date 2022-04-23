import React from "react";
const Product = ({ productName, photoUrl, price, brand, buyingUrl }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={photoUrl} alt={productName} />
      </div>
      <div className="product-details">
        <h3>{productName}</h3>
        <div className="inner-details">
          <span className="colorize">{price} $</span>
          <span>{brand}</span>
        </div>
        {buyingUrl ? (
          <button
            onClick={() => window.open(buyingUrl, "_blank")}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        ) : (
          <small>No buying Button Available</small>
        )}
      </div>
    </div>
  );
};

export default Product;
