import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="main_navBar">
      <div className="logo_navBar">
        <img src="/logo.jpg" />
      </div>

      <div className="Options_navBar">
        <div className="options">Home</div>
        <div className="options">About</div>
        <div className="options">Gift Card</div>
        <div className="options">Subscribe & Save</div>
        <div className="options">Order</div>
      </div>

      <div className="logIn_navBar">
        <i className="fa-solid fa-cart-shopping">Cart</i>
      </div>
    </div>
  );
};

export default Navbar;
