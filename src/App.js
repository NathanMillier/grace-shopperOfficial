import { token } from "morgan";
import { useState } from "react";
import { useEffect } from "react";
import Register from "./Register";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const info = await response.json();
    setProducts(info);
  };

  useEffect(() => {
    fetchProducts();
  }, [token]);

  return (
    <>
      <Navbar user={user} setToken={setToken} setUser={setUser} />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/">
        <Products
          setProducts={setPosts}
          fetchProducts={fetchPosts}
          products={products}
          token={token}
        />
      </Route>

      <Route exact path="/newproduct">
        <CreateNewProduct fetchProducts={fetchProducts} />
      </Route>

      <Route exact path="/register">
        <Register setToken={setToken} />
      </Route>

      <Route exact path="/login">
        <Login setToken={setToken} />
      </Route>
    </>
  );
};

export default App;
