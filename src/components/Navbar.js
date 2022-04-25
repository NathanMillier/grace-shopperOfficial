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
            <div className="menuItem">
              <Link to="/">HOME</Link>
            </div>
            <div className="menuItem">
              <Link to="/Products">ALL SHOES</Link>
            </div>
            {user ? (
              <div className="menuItem">
                <Link
                  to="/"
                  onClick={() => {
                    setToken("");
                    setUser(null);
                    localStorage.removeItem("token");
                  }}
                >
                  LOGOUT
                </Link>
              </div>
            ) : (
              <div className="menuItem">
                <Link to="/Login">LOGIN</Link>
              </div>
            )}
            {user ? null : (
              <div className="menuItem">
                <Link to="/Register">REGISTER</Link>
              </div>
            )}

            <div className="menuItem">
              <Link to="/Cart">CART</Link>
              {/* <ShoppingCartOutlined style={{ marginLeft: "5px" }} /> */}
            </div>
            {user ? (
              user.isAdmin === true ? (
                <div className="menuItem">
                  <Link to="/admin" className="link">
                    ADMIN
                  </Link>
                </div>
              ) : null
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* <Link to="/Cart">Cart</Link>;
{
  user ? (
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
  );
}
{
  user ? (
    user.isAdmin == true ? (
      <Link to="/admin" className="link">
        Admin
      </Link>
    ) : null
  ) : null;
} */
