import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../Firebase/Firebase.config";
import useProducts from "../../Hooks/useProducts";
import useTitle from "../../Hooks/useTitle";
import Product from "../Products/Product/Product";
import "./Order.css";
const Order = () => {
  useTitle("Place Order ");
  const { orderId } = useParams();
  const { products } = useProducts();

  const singleOrderProduct = products.find(
    (product) => product._id === orderId
  );

  const [orderForm, setOrderForm] = useState({
    name: `${auth?.currentUser?.displayName}`,
    email: `${auth?.currentUser?.email}`,
    phone: "",
    address: "",
    transaction: "",
  });

  const submitOrderForm = async (event) => {
    event.preventDefault();
    if (!orderForm.phone) return toast.error("Phone number is required.");
    if (!orderForm.address) return toast.error("Address field is required.");
    if (!orderForm.transaction)
      return toast.error("Transaction field is must required.");

    const orderData = {
      author: {
        name: orderForm.name,
        email: orderForm.email,
      },
      uid: auth?.currentUser?.uid,
      phone: orderForm.phone,
      address: orderForm.address,
      transaction: orderForm.transaction,
      productId: singleOrderProduct._id,
    };

    await axios
      .post("http://localhost:5000/order", orderData)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire(
            "Thanks for your Order!",
            "we will update you on your email and phone number stay tune",
            "success"
          );
          event.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="order">
      <div className="container">
        <div className="order-container">
          <form action="" onSubmit={submitOrderForm} className="form-wrapper">
            <h1>Order Details</h1>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                value={orderForm.name}
                type="text"
                placeholder="Name"
                id="name"
                readOnly
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                value={orderForm.email}
                type="email"
                placeholder="Email"
                id="email"
                readOnly
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                onChange={(event) =>
                  setOrderForm({ ...orderForm, phone: event.target.value })
                }
                placeholder="Phone Number"
                id="phone"
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Address</label>
              <input
                type="text"
                onChange={(event) =>
                  setOrderForm({ ...orderForm, address: event.target.value })
                }
                placeholder="Address"
                id="address"
              />
            </div>
            <div className="input-group">
              <label htmlFor="transaction">Transaction</label>
              <input
                type="text"
                onChange={(event) =>
                  setOrderForm({
                    ...orderForm,
                    transaction: event.target.value,
                  })
                }
                placeholder="Transaction"
                id="transaction"
              />
              <small>
                After payment successfully done you get the transaction ID
              </small>
            </div>
            <div className="input-group choose-product">
              <div className="ordered-product">
                <p>You choose -</p>
                <Product isOrderPage {...singleOrderProduct} />
              </div>

              <ul>
                <li className="colorize">Payment Method</li>
                <li>
                  <b>Bkash Number (send money)</b> - 014777575544454
                </li>
                <li>
                  <b>Nagad Number</b> - 0155421425445
                </li>
                <li>
                  <b>bank account</b> - 4545645546546
                </li>
              </ul>
            </div>
            <div className="input-group">
              <button className="btn btn-primary">Place Order</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order;
