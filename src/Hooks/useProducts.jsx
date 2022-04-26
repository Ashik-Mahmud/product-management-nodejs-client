import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AppContext);
  useEffect(() => {
    const getProducts = async () => {
      try {
        await axios
          .get(`https://product-management-with.herokuapp.com/products`)
          .then((res) => {
            setProducts(res.data);
            setLoading(true);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [user]);

  return { setProducts, products, loading };
};

export default useProducts;
