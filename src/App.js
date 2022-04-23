import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";
import ProductSingleView from "./ProductSingleView";

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
        </Routes>
        <Routes>
          <Route element={<Register />} path="/Register" />
        </Routes>
        <Routes>
          <Route
            element={
              <Products products={products} fetchProducts={fetchProducts} />
            }
            path="/Products"
          />
        </Routes>
        <Routes>
          <Route
            element={
              <ProductSingleView
                products={products}
                fetchProducts={fetchProducts}
              />
            }
            path="/Products/:id"
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
