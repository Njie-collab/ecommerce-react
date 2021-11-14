import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Images/logo.png";
const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img style={{ width: "10%" }} src={logo} alt="logo" />
      </Link>

      <ul>
        <NavLink style={{ textDecoration: "none" }} to="/">
          <li>About</li>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to="/home">
          <li>Home</li>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to="/reducer">
          <li>Reducer</li>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to="/cart">
          <li>Cart</li>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to="/products">
          <li>Products</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
