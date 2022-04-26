import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Login from "./Login";
// import Register from "./Register";
import Products from "./Products";
// import ProductSingleView from "./ProductSingleView";
import Admin from "./Admin";

import Cart from "./Cart";


import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Categories from "./components/Categories";
import SingleProduct from "./components/SingleProduct";
// import AllProducts from "./components/AllProducts";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import AllPopProducts from "./components/AllPopProducts";
import AllPopProductsPage from "./pages/AllPopProducts";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleProductPage from "./pages/SingleProductPage";


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
  const addItemToCart = async (currentProduct) => {
    // FETCH ALL PRODUCTS IN THE ORDER
    console.log(user.cart.products);
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
          console.log(data);
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
    // CHECK IF CURRENT PRODUCT IS IN ORDER
    // IF IT IS, UPDATE REQUEST WITH UPDATE QUERY
    // ELSE POST REQUEST WITH INSERT QUERY
  };

  useEffect(() => {
    fetchProducts();
    fetchUser();
  }, [token]);

  return (
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

    //   <div id="container">
    //     <Navbar user={user} setUser={setUser} setToken={setToken} token={token} />

    //     <div id="main">
    //       <Routes>
    //         <Route element={<Home user={user} />} path="/" />
    //         <Route
    //           element={
    //             <Login
    //               email={email}
    //               setEmail={setEmail}
    //               password={password}
    //               setPassword={setPassword}
    //               user={user}
    //               setUser={setUser}
    //               setToken={setToken}
    //               error={error}
    //               setError={setError}
    //             />
    //           }
    //           path="/Login"
    //         />

    //         <Route
    //           element={
    //             <Register
    //               email={email}
    //               setEmail={setEmail}
    //               password={password}
    //               setPassword={setPassword}
    //               confirm={confirm}
    //               setConfirm={setConfirm}
    //               user={user}
    //               setUser={setUser}
    //               setToken={setToken}
    //               error={error}
    //               setError={setError}
    //             />
    //           }
    //           path="/Register"
    //         />

    //         <Route
    //           element={
    //             <Products
    //               products={products}
    //               fetchProducts={fetchProducts}
    //               addItemToCart={addItemToCart}
    //             />
    //           }
    //           path="/Products"
    //         />


    //         <Route
    //           element={
    //             <ProductSingleView
    //               products={products}
    //               fetchProducts={fetchProducts}
    //             />
    //           }
    //           path="/Products/:id"
    //         />

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


    //         <Route
    //           element={
    //             <Admin
    //               fetchUser={fetchUser}
    //               products={products}
    //               user={user}
    //               token={token}
    //             />
    //           }
    //           path="/admin"
    //         />
    //         <Route
    //           element={
    //             <Cart
    //               setCartItems={setCartItems}
    //               cartItems={cartItems}
    //               addItemToCart={addItemToCart}
    //               products={products}
    //               user={user}
    //               token={token}
    //               fetchUser={fetchUser}
    //             />
    //           }
    //           path="/Cart"
    //         ></Route>
    //       </Routes>
    //     </div>
    //   </div>
  );
};

export default App;
