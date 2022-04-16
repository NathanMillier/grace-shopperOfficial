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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div id="container">
        <Navbar />
      </div>
      <div id="main">
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
        <Routes>
<<<<<<< HEAD
          <Route element={<Login />} path="/Login" />
=======
          <Route
            element={
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            }
            path="/Login"
          />
>>>>>>> 7292303c49601094e2aa920fc432b40298976123
        </Routes>
        <Routes>
          <Route element={<Register />} path="/Register" />
        </Routes>
        <Routes>
<<<<<<< HEAD
=======

          

>>>>>>> 7292303c49601094e2aa920fc432b40298976123
          <Route
            element={
              <Products products={products} fetchProducts={fetchProducts} />
            }
            path="/Products"
          />
<<<<<<< HEAD
=======

>>>>>>> 7292303c49601094e2aa920fc432b40298976123
        </Routes>
      </div>
    </>
  );
};

export default App;
