import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Login from "./Login";
import Register from "./Register";
import Products from "./Products";
import Admin from "./Admin";
import Cart from "./Cart";
import Announcement from "./components/Announcement";

import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

import Login from "./pages/Login";

import Categories from "./components/Categories";
import SingleProduct from "./components/SingleProduct";
import AllProducts from "./components/AllProducts";
import Slider from "./components/Slider";
import Home from "./pages/Home";

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
    <Home />
    // <div id="container">
    //   <Announcement />
    //   <Navbar user={user} setUser={setUser} setToken={setToken} token={token} />
    //   <Slider />
    //   <Categorie />
    //   <AllProducts />

    //   <div id="main">
    //     <Routes>
    //       {/* <Route element={<Home user={user} />} path="/" /> */}
    //       <Route
    //         element={
    //           <Login
    //             email={email}
    //             setEmail={setEmail}
    //             password={password}
    //             setPassword={setPassword}
    //             user={user}
    //             setUser={setUser}
    //             setToken={setToken}
    //             error={error}
    //             setError={setError}
    //           />
    //         }
    //         path="/Login"
    //       />

    //       <Route element={<Register />} path="/Register" />

    //       <Route
    //         element={
    //           <Products
    //             products={products}
    //             fetchProducts={fetchProducts}
    //             addItemToCart={addItemToCart}
    //           />
    //         }
    //         path="/Products"
    //       />

    //       <Route
    //         element={<productSingleView fetchProducts={fetchProducts} />}
    //         path="/Products/:id"
    //       />

    //       <Route
    //         element={
    //           <Admin
    //             fetchUser={fetchUser}
    //             products={products}
    //             user={user}
    //             token={token}
    //           />
    //         }
    //         path="/admin"
    //       />
    //       <Route
    //         element={
    //           <Cart
    //             setCartItems={setCartItems}
    //             cartItems={cartItems}
    //             addItemToCart={addItemToCart}
    //           />
    //         }
    //         path="/Cart"
    //       ></Route>
    //     </Routes>
    //   </div>
    //   <Newsletter />
    //   <Footer />
    // </div>
  );
};

export default App;
