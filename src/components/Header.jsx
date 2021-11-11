import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Images/logo.png"
const Header = () => {
  return (
    <nav>
       
      <Link to="/">
        <img style={{width:"10%"}} src={logo} alt="logo" />
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
