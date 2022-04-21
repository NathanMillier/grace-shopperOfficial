import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ user, setToken, setUser }) => {
  return (
    <div className="navbar">
      <div id="menu">
        <ul className="menu">
          <Link to="/" className="link">
            Home
          </Link>

          <Link to="/Products" className="link">
            Products
          </Link>
          {user ? (
            <Link
              to="/"
              onClick={() => {
                setToken("");
                setUser(null);
                localStorage.removeItem("token");
              }}
            >
              Logout
            </Link>
          ) : (
            <>
              <Link to="/Login" className="link">
                Login
              </Link>
              <Link to="/Register" className="link">
                Register
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
