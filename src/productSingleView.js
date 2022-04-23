import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useParams } from "react";

const ProductSingleview = ({ fetchProducts }) => {
  const params = useParams();
  const [orderQuantity, setOrderQuantity] = useState;

  const increaseQuantity = () => {
    orderQuantity.setState({ clicks: this.state.clicks + 1 });
  };

  const decreaseQuantity = () => {
    orderQuantity.setState({ clicks: this.state.clicks - 1 });
  };

  const checkQuantity = () => {
    if (orderQuantity <= product.stock) {
      addItemToCart();
    } else return;
  };

  const fetchProduct = async () => {
    const response = await fetch``;
  };
  return (
    <div id="container">
      <div id="productInfo">
        <h1 id="productName">{product.name}</h1>
        <h4 id="productDescription">{product.description}</h4>
        <h4 id="productPrice">{product.price}</h4>
        <img id="productIcon"></img>
        <h5 id="inStock">{product.stock} in Stock</h5>
        {/* add src when photos are added to db? */}
      </div>
      <form id="addToCart">
        <button onClick={orderQuantity.increaseQuantity}>+</button>
        <button onClick={orderQuantity.decreaseQuantity}>-</button>
        <input type="number" value={orderQuantity} />

        <button type="submit" onClick={(e) => checkQuantity(orderQuantity)}>
          Add To Cart
        </button>
      </form>
    </div>
  );
};

export default productSingleview;
