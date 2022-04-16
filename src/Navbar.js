import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className="navbar">
      <div id="menu">
        <ul className="menu">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/Login" className="link">
            Login
          </Link>
          <Link to="/Register" className="link">
            Register
          </Link>
          <Link to="/Products" className="link">
            Products
          </Link>
        </ul>
=======
    <div>
      <div>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/Login" className="link">
          Login
        </Link>
        <Link to="/Register" className="link">
          Register
        </Link>
        <Link to="/Products" className="link">
          Products
        </Link>
>>>>>>> 7292303c49601094e2aa920fc432b40298976123
      </div>
    </div>
  );
};

export default Navbar;
