import React from "react";
import { useNavigate } from "react-router-dom";
const Product = ({
  _id,
  productName,
  photoUrl,
  price,
  brand,
  buyingUrl,
  isOrderPage,
}) => {
  const navigate = useNavigate();
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
        {!isOrderPage && (
          <div className="btn-group">
            <button
              onClick={() => navigate(`/order/${_id}`)}
              className="btn btn-primary"
            >
              Buy from here
            </button>
            {buyingUrl ? (
              <button
                onClick={() => window.open(buyingUrl, "_blank")}
                className="btn btn-primary"
              >
                Buy Outside
              </button>
            ) : (
              <small>No buying Button Available</small>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
