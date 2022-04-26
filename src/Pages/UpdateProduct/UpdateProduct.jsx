import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.config";
import useProducts from "../../Hooks/useProducts";
import useTitle from "../../Hooks/useTitle";

const UpdateProduct = () => {
  useTitle("Update product");
  const { id } = useParams();
  const { products } = useProducts();
  const currentProduct = products.find((product) => product._id === id);
  const formRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
      },
    };

    await axios
      .put(
        `https://product-management-with.herokuapp.com/products/${id}`,
        newData
      )
      .then(function (response) {
        if (response?.data?.acknowledged) {
          toast.success(`Product Update successfully done.`);
          navigate("/manage-product");
        } else {
          toast.error(`Something went wrong`);
        }
      });
    formRef.current.reset();
  };

  return (
    <div>
      <div className="container">
        <form
          ref={formRef}
          className="form-wrapper"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Update Product </h1>
          <div className="input-group">
            <label htmlFor="buying-url">Product Buying URL</label>
            <input
              type="url"
              placeholder="Product Buying URL"
              id="buying-url"
              {...register("buyingUrl")}
              defaultValue={currentProduct?.buyingUrl}
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              id="name"
              {...register("productName", { required: true })}
              defaultValue={currentProduct?.productName}
            />
          </div>
          <div className="input-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              placeholder="Product Category"
              id="category"
              {...register("category", { required: true })}
              defaultValue={currentProduct?.category}
            />
          </div>
          <div className="input-group">
            <label htmlFor="price">Product Price</label>
            <input
              type="text"
              placeholder="Product Price"
              id="price"
              {...register("price", { required: true })}
              defaultValue={currentProduct?.price}
            />
          </div>
          <div className="input-group">
            <label htmlFor="brand">Product Brand</label>
            <input
              type="text"
              placeholder="Product Brand"
              id="brand"
              {...register("brand", { required: true })}
              defaultValue={currentProduct?.brand}
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Short Description</label>
            <textarea
              type="text"
              placeholder="Product Description"
              rows={3}
              id="name"
              {...register("shortDescription", { required: true })}
              defaultValue={currentProduct?.shortDescription}
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="url">Product Image URL</label>
            <input
              type="url"
              {...register("photoUrl", { required: true })}
              placeholder="Product Image URL"
              id="url"
              defaultValue={currentProduct?.photoUrl}
            />
          </div>
          <div className="input-group">
            <button className="btn btn-primary">Update Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
