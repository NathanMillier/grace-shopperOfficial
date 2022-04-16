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
          <Route element={<Login />} path="/Login" />
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
      </div>
    </>
  );
};

export default App;
