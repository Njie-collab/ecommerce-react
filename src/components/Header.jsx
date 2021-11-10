import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <img src="{images}" alt="" />
      <Link to="/">
        <h1>Logo</h1>
      </Link>

      <ul>
        <NavLink to="/">
          <li>About</li>
        </NavLink>
        <NavLink to="/home">
          <li>Home</li>
        </NavLink>

        <NavLink to="/reducer">
          <li>Reducer</li>
        </NavLink>

        <NavLink to="/cart">
          <li>Cart</li>
        </NavLink>

        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
