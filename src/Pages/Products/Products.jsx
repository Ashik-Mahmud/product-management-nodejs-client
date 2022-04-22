import React from "react";
import Product from "./Product/Product";
import "./Products.css";
const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="title">
          <h2 className="title">Products</h2>
          <div>
            <select name="category" id="">
              <option value="a">ASUS</option>
              <option value="a">APEX</option>
            </select>
            <select name="category" id="">
              <option value="a">Electronics</option>
              <option value="a">Mobile</option>
              <option value="a">Headphone</option>
              <option value="a">Motorcycle</option>
            </select>
          </div>
        </div>
        <div className="product-container">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Products;
