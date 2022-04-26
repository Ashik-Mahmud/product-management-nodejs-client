import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import useProducts from "../../../Hooks/useProducts";
import useTitle from "../../../Hooks/useTitle";
import Products from "../../Products/Products";
import Hero from "../Hero/Hero";

const Home = () => {
  useTitle("Home ");
  const { setProducts, products } = useProducts();
  const handleSearch = async (search) => {
    if (!search) return toast.error("Search field is required.");
    await axios
      .get(
        `https://product-management-with.herokuapp.com/products/search?name=${search}`
      )
      .then((res) => {
        setProducts(res.data);
      });
    const searchItems = getItems();

    searchItems.push(search.toLowerCase());
    localStorage.setItem("search", JSON.stringify(searchItems));
  };

  const getItems = () => {
    const storage = localStorage.getItem("search");
    let searchTerms;
    if (storage) {
      searchTerms = JSON.parse(storage);
    } else {
      searchTerms = [];
    }
    return searchTerms;
  };

  return (
    <section id="home">
      <Hero handleSearch={handleSearch} getItems={getItems} />
      <Products products={products} />
    </section>
  );
};

export default Home;
