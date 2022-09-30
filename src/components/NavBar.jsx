import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link className="nav-btn" to="/">
        Reviews
      </Link>
      <Link className="nav-btn" to="/categories">
        Categories
      </Link>
    </nav>
  );
};

export default NavBar;
