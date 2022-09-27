import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Reviews</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
};

export default NavBar;
