import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { auth } from "../../Firebase/Firebase.config";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AppContext);

  const logOut = async () => {
    await signOut(auth).then(() => {
      toast.success("Sign Out Successfully done.");
      navigate("/login");
      sessionStorage.removeItem("accessToken");
    });
  };

  return (
    <header id="header">
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            PRODUCT
          </Link>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            {isAuth && (
              <>
                <li>
                  <NavLink to="/create-product">Create Product</NavLink>
                </li>
                <li>
                  <NavLink to="/manage-product">Manage Product</NavLink>
                </li>
                <li>
                  <NavLink to="/manage-order">Manage Order</NavLink>
                </li>
              </>
            )}
          </ul>
          {isAuth ? (
            <div className="profile">
              <div className="avatar">
                <img width={50} src={auth?.currentUser?.photoURL} alt="" />
              </div>
              <div className="details">
                <div>
                  <h4>{auth?.currentUser?.displayName}</h4>
                  <small title={auth?.currentUser?.email}>
                    {auth?.currentUser?.email
                      ? auth?.currentUser?.email.slice(0, 20) + "..."
                      : "Not available"}
                  </small>
                </div>
                <button onClick={logOut} className="btn btn-danger">
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn btn-primary"
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
