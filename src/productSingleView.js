import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductSingleView = ({ products, fetchProducts, addItemToCart }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  console.log(product);
  useEffect(() => {
    setProduct(products.find((product) => product.id === +id));
  }, [products]);

  return product ? (
    <div id="container">
      <div id="productInfo">
        <h1 id="productName">{product.title}</h1>
        <h4 id="productDescription">{product.description}</h4>
        <h4 id="productPrice">{product.price}</h4>
        <img src={product.imgurl} id="productIcon"></img>
        <h5 id="inStock">{product.stock} in Stock</h5>
        <button onClick={() => addItemToCart(product)}>Add to Cart</button>
      </div>
    </div>
  ) : (
    <h1>Product Not found</h1>
  );
};

export default ProductSingleView;
