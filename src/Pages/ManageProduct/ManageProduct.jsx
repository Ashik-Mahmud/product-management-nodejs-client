import React from "react";
import "../Pages.css";
const ManageProduct = () => {
  return (
    <div>
      <div className="container">
        <div className="table-wrapper">
          <h1>Manage Product</h1>
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
              <tr>
                <td>1</td>
                <td>Laptop</td>
                <td>3243</td>
                <td>Laptop</td>
                <td>ASUS</td>
                <td>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_5kPXQV4S6jTkKb0zcV9NVYzo2TjLLt3yDBcRZ2Yd3VFPqfFwtcS8Hex5ikZnm0QcNI&usqp=CAU"
                    alt="product"
                    width={100}
                  />
                </td>
                <td>
                  <span className="btn btn-primary">Edit</span>
                </td>
                <td>
                  <span className="btn btn-danger">Delete</span>
                </td>
                <td>
                  <span className="colorize">Published</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
