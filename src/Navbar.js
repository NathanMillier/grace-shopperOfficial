import { Link } from "react-router-dom";
import CreateNewProduct from "./NewProduct";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <>
      <div id="navbar">
        <div>
          <ul className="menu">
            <Link to="/">Home</Link>
            <Link to="/products">Shoes</Link>
            <Link to="/categories">Categories</Link>
            {user ? (
              <Link
                onClick={() => {
                  setToken("");
                  setUser(null);
                  localStorage.removeItem("token");
                }}
                to="/"
              >
                Log out
              </Link>
            ) : (
              <>
                <Link to="/Login">Log in</Link>
                <Link to="/Register">Register</Link>
              </>
            )}
          </ul>
        </div>
        {user ? <span>Welcome {user.username}</span> : null}
      </div>
    </>
  );
};

export default Navbar;
