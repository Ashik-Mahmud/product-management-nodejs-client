import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.config";
import useTitle from "../../Hooks/useTitle";
import "./ManageOrder.css";
const ManageOrder = () => {
  useTitle("Manage Order");
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        await axios
          .get(`http://localhost:5000/order?uid=${auth?.currentUser?.uid}`, {
            headers: {
              authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => {
            setOrders(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  return (
    <section className="manage-order">
      <div className="container">
        <div className="table-wrapper">
          <h1>Manage Order</h1>
          <table>
            <thead>
              <tr>
                <th>OrderId</th>
                <th>Shipping Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Product</th>
                <th>Action</th>
                <th>Danger</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order?._id.slice(0, 5)}</td>
                  <td>{order?.address}</td>
                  <td>{order?.phone}</td>
                  <td>{order?.author?.email}</td>
                  <td>
                    <span
                      onClick={() =>
                        navigate(`/view-order/${order?.productId}`)
                      }
                      className="colorize cursor-pointer"
                    >
                      View
                    </span>
                  </td>
                  <td>
                    <span className="colorize">Pending</span>
                  </td>
                  <td>
                    <span className="text-danger cursor-pointer">
                      Cancel Request
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageOrder;
