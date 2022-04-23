import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.config";
import useProducts from "../../Hooks/useProducts";
import "../Pages.css";
const ManageProduct = () => {
  const navigate = useNavigate();
  const { products } = useProducts();
  const [currentUserProducts, setCurrentUserProducts] = useState([]);
  useEffect(() => {
    const userProducts = products.filter(
      (product) => product?.author?.uid === auth?.currentUser?.uid
    );
    setCurrentUserProducts(userProducts);
  }, [products]);

  /* Handle delete items  */
  const handleDeleteProduct = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
      if (res?.data?.acknowledged) {
        toast.success("Delete products successfully done.");
        const filterProduct = currentUserProducts.filter(
          (product) => product._id !== id
        );
        setCurrentUserProducts(filterProduct);
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="table-wrapper">
          <h1>Manage Product</h1>
          {currentUserProducts.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Image</th>
                  <th width="100px">Edit</th>
                  <th width="100px">Delete</th>
                  <th width="100px">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentUserProducts.map((product, ind) => (
                  <tr key={product._id}>
                    <td>{ind + 1}</td>
                    <td>{product?.productName.slice(0, 40)}</td>
                    <td>{product?.price}</td>
                    <td>{product?.category}</td>
                    <td>{product?.brand}</td>
                    <td>
                      <img src={product?.photoUrl} alt="product" width={100} />
                    </td>
                    <td>
                      <span
                        onClick={() =>
                          navigate(`/update-product/${product?._id}`)
                        }
                        className="btn btn-primary"
                      >
                        Edit
                      </span>
                    </td>
                    <td>
                      <span
                        onClick={() => handleDeleteProduct(product?._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </span>
                    </td>
                    <td>
                      <span className="colorize">Published</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 0rem" }}>
              <h3>No Product added yet.</h3>
              <button
                onClick={() => navigate("/create-product")}
                style={{ margin: "1rem auto" }}
                className="btn btn-primary"
              >
                Add Product
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
