import React from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import useTitle from "../../../Hooks/useTitle";
import "./ViewOrder.css";
const ViewOrder = () => {
  useTitle("View Order");
  const { products } = useProducts();
  const { orderId } = useParams();
  const currentProduct = products.find((product) => product._id === orderId);

  return (
    <section className="view-order">
      <div className="container">
        <div className="table-wrapper">
          <h1>{currentProduct?.productName}</h1>
          <div className="image">
            <img src={currentProduct?.photoUrl} alt="" />
          </div>
          <ul>
            <li>
              Price - <span className="colorize">{currentProduct?.price}</span>
            </li>
            <li>
              Category -
              <span className="colorize">{currentProduct?.category}</span>
            </li>
            <li>
              Brand - <span className="colorize">{currentProduct?.brand}</span>
            </li>
          </ul>
          <p>{currentProduct?.shortDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default ViewOrder;
