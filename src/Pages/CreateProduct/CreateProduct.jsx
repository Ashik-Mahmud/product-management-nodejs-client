import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { auth } from "../../Firebase/Firebase.config";
import "../Pages.css";
const CreateProduct = () => {
  const formRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
      },
    };

    await axios
      .post("http://localhost:5000/products", newData)
      .then(function (response) {
        if (response?.data?.acknowledged) {
          toast.success(`Product Added successfully done.`);
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
          <h1>Create Product </h1>
          <div className="input-group">
            <label htmlFor="buying-url">Product Buying URL</label>
            <input
              type="url"
              placeholder="Product Buying URL"
              id="buying-url"
              {...register("buyingUrl")}
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              id="name"
              {...register("productName", { required: true })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              placeholder="Product Category"
              id="category"
              {...register("category", { required: true })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="price">Product Price</label>
            <input
              type="text"
              placeholder="Product Price"
              id="price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="brand">Product Brand</label>
            <input
              type="text"
              placeholder="Product Brand"
              id="brand"
              {...register("brand", { required: true })}
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
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="url">Product Image URL</label>
            <input
              type="url"
              {...register("photoUrl", { required: true })}
              placeholder="Product Image URL"
              id="url"
            />
          </div>
          <div className="input-group">
            <button className="btn btn-primary">Save Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
