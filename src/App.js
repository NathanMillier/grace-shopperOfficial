import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const info = await response.json();
    setProducts(info);
  };

  useEffect(() async => {
    await fetchProducts();
  }, []);

  return <>Full-Stack App!!!!</>;
  console.log(products);
};

export default App;
