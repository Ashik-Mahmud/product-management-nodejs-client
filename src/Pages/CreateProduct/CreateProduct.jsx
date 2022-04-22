import React from "react";
import "../Pages.css";
const CreateProduct = () => {
  return (
    <div>
      <div className="container">
        <form action="" className="form-wrapper">
          <h1>Create Product </h1>
          <div className="input-group">
            <label htmlFor="buying-url">Product Buying URL</label>
            <input
              type="url"
              placeholder="Product Buying URL"
              id="buying-url"
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Product Name</label>
            <input type="text" placeholder="Product Name" id="name" />
          </div>
          <div className="input-group">
            <label htmlFor="category">Category</label>
            <input type="text" placeholder="Product Category" id="category" />
          </div>
          <div className="input-group">
            <label htmlFor="price">Product Price</label>
            <input type="text" placeholder="Product Price" id="price" />
          </div>
          <div className="input-group">
            <label htmlFor="brand">Product Brand</label>
            <input type="text" placeholder="Product Brand" id="brand" />
          </div>
          <div className="input-group">
            <label htmlFor="name">Short Description</label>
            <textarea
              type="text"
              placeholder="Product Description"
              rows={3}
              id="name"
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="url">Product Image URL</label>
            <input type="url" placeholder="Product Image URL" id="url" />
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
