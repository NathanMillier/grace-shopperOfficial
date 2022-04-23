import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";
import ProductSingleView from "./ProductSingleView";
import Admin from "./Admin";
import Cart from "./Cart";


const App = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [cartItems, setCartItems] = useState([]);
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
      console.log("token set");
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
  // console.log(products);
  const addItemToCart = (currentProduct) => {
    // const exist = products.find((product) => {
    //   product.id == currentProduct.id;
    // });

    const exist = products.find((product) => product.id === currentProduct.id);
    // console.log(exist);
    // setCartItems([exist]);

    if (cartItems.find((x) => x.id === exist.id)) {
      const itemToAdd = cartItems.map((x) =>
        x.id === currentProduct.id ? { ...exist, qty: x.qty + 1 } : x
      );
      setCartItems(itemToAdd);
    } else {
      setCartItems([...cartItems, { ...currentProduct, qty: 1 }]);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchUser();
  }, [token]);

  return (
    <div id="container">
      <Navbar user={user} setUser={setUser} setToken={setToken} token={token} />

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
              <Products
                products={products}
                fetchProducts={fetchProducts}
                addItemToCart={addItemToCart}
              />
            }
            path="/Products"
          />

          <Route
            element={
              <ProductSingleView
                products={products}
                fetchProducts={fetchProducts}
              />
            }
            path="/Products/:id"
          />

          <Route
            element={
              <Admin
                fetchUser={fetchUser}
                products={products}
                user={user}
                token={token}
              />
            }
            path="/admin"
          />
          <Route
            element={
              <Cart
                setCartItems={setCartItems}
                cartItems={cartItems}
                addItemToCart={addItemToCart}
              />
            }
            path="/Cart"
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
