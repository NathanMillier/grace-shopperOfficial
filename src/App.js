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

  const addItemToCart = async (currentProduct) => {
    //IF A USER IS LOGGED IN
    if (user) {
      for (let i = 0; i < user.cart.products.length; i++) {
        if (user.cart.products.length) {
          if (currentProduct.id === user.cart.products[i].id) {
            const response = await fetch(
              "http://localhost:3001/api/order/updateCartItem",
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  orderId: user.cart.id,
                  productId: currentProduct.id,
                }),
              }
            );
            const data = await response.json();
            await fetchUser();
            return;
          }
        }
      }

      const response = await fetch("http://localhost:3001/api/order/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          orderId: user.cart.id,
          productId: currentProduct.id,
          price: currentProduct.price,
          quantity: 1,
        }),
      });
      const data = await response.json();
      await fetchUser();
    } else {
      //NO USER LOGGED
      const exist = products.find(
        (product) => product.id === currentProduct.id
      );

      if (cartItems.find((cartItem) => cartItem.id === exist.id)) {
        const itemToAdd = cartItems.map((cartItem) => {
          const tempItem = { ...exist, qty: cartItem.qty + 1 };
          tempItem.displayPrice = tempItem.price * tempItem.qty;
          return cartItem.id === currentProduct.id ? tempItem : cartItem;
        });
        setCartItems(itemToAdd);
      } else {
        setCartItems([
          ...cartItems,
          { ...currentProduct, qty: 1, displayPrice: currentProduct.price },
        ]);
      }
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
                addItemToCart={addItemToCart}
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
                products={products}
                user={user}
                token={token}
                fetchUser={fetchUser}
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
