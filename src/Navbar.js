import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ user, setToken, setUser, token }) => {
  console.log(user);
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
          {token ? (
            <Link
              to="/"
              onClick={() => {
                setToken("");
                setUser({});
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
          {user.isAdmin === true ? (
            <Link to="/admin" className="link">
              Admin
            </Link>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
