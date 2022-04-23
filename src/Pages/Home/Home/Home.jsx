import axios from "axios";
import React from "react";
import useProducts from "../../../Hooks/useProducts";
import Products from "../../Products/Products";
import Hero from "../Hero/Hero";

const Home = () => {
  const { setProducts, products } = useProducts();
  const handleSearch = async (search) => {
    await axios
      .get(`http://localhost:5000/products/search?name=${search}`)
      .then((res) => {
        setProducts(res.data);
      });
  };

  return (
    <section id="home">
      <Hero handleSearch={handleSearch} />
      <Products products={products} />
    </section>
  );
};

export default Home;
