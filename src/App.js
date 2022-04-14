import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

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
      <div>app.js</div>
      <div id="container">
        <Navbar />
      </div>
      <div id="main">
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </div>
    </>
  );
};

export default App;
