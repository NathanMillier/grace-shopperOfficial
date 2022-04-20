import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3001/api/products");
    const info = await response.json();
    setProducts(info);
  };

  const fetchUser = async () => {
    const lsToken = localStorage.getItem("token");

    if (lsToken) {
      setToken(lsToken);
    }
    const response = await fetch("http://localhost:3001/api/user/me", {
      headers: {
        Authorization: `Bearer ${lsToken}`,
      },
    });

    const data = await response.json();
    if (!data.error) {
      console.log("User set");
      setUser(data);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchUser();
  }, [token]);

  return (
    <div id="container">
      <Navbar user={user} setUser={setUser} setToken={setToken} />

      <div id="main">
        <Routes>
          <Route element={<Home user={user} />} path="/" />

          <Route
            element={
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                user={user}
                setUser={setUser}
                setToken={setToken}
                error={error}
                setError={setError}
              />
            }
            path="/Login"
          />

          <Route
            element={
              <Register
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirm={confirm}
                setConfirm={setConfirm}
                user={user}
                setUser={setUser}
                setToken={setToken}
                error={error}
                setError={setError}
              />
            }
            path="/Register"
          />

          <Route
            element={
              <Products products={products} fetchProducts={fetchProducts} />
            }
            path="/Products"
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
