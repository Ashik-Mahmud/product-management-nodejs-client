import React from "react";
import Loader from "../../Components/Loader/Loader";
import useProducts from "../../Hooks/useProducts";
import Product from "./Product/Product";
import "./Products.css";
const Products = ({ products }) => {
  const { loading } = useProducts();

  return (
    <section className="products">
      <div className="container">
        <div className="title">
          <h2 className="title">Products </h2>
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
        {loading ? (
          products.length > 0 ? (
            <div className="product-container">
              {products.map((product) => (
                <Product key={product._id} {...product} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 0rem" }}>
              <h2>No Products Available</h2>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default Products;
