import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
      setLoading(true);
    });
  }, []);

  return { products, loading };
};

export default useProducts;
