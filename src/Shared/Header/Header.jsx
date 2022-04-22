import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
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
              <NavLink to="/create-product">Create Product</NavLink>
            </li>
            <li>
              <NavLink to="/manage-product">Manage Product</NavLink>
            </li>
          </ul>
          <div className="profile">
            <div className="avatar">
              <img
                width={50}
                src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <div>
                <h4>Ashik Mahmud</h4>
                <small>ashik@gmail.com</small>
              </div>
              <button className="btn btn-danger">Log Out</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
