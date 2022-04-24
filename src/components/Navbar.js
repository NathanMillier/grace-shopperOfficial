import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, setToken, setUser, token }) => {
  return (
    <div className="navbar">
      <div className="navcont">
        <div className="navleft">
          EN
          <div className="searchcont">
            <input placeholder="Search" value={""}></input>
            {/* <Search></Search> */}
          </div>
        </div>
        <div className="navcenter">Feet Heat</div>
        <div className="navright">
          <div className="menuCont">
            <Link to="/" className="menuItem">
              HOME
            </Link>
            <Link to="/AllProducts" className="menuItem">
              ALL SHOES
            </Link>
            {user ? (
              <Link
                to="/"
                onClick={() => {
                  setToken("");
                  setUser(null);
                  localStorage.removeItem("token");
                }}
                className="menuItem"
              >
                LOGOUT
              </Link>
            ) : (
              <>
                <Link to="/Login" className="menuItem">
                  SIGN IN
                </Link>
                <Link to="/Register" className="menuItem">
                  REGISTER
                </Link>
              </>
            )}
            {user ? (
              user.isAdmin == true ? (
                <Link to="/admin" className="link">
                  Admin
                </Link>
              ) : null
            ) : null}

            <Link to="/Cart" className="menuItem">
              CART
              {/* <ShoppingCartOutlined style={{ marginLeft: "5px" }} /> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
