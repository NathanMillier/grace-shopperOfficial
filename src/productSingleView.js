import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductSingleView = ({ products, fetchProducts }) => {
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  // const { products } =
  console.log(product);
  useEffect(() => {
    setProduct(products.find((product) => product.id === +id));
  }, [products]);

  const increaseQuantity = () => {
    orderQuantity.setState({ clicks: this.state.clicks + 1 });
  };

  const decreaseQuantity = () => {
    orderQuantity.setState({ clicks: this.state.clicks - 1 });
  };

  //   const checkQuantity = () => {
  //     if (orderQuantity <= product.stock) {
  //       addItemToCart();
  //     } else return;
  //   };

  return product ? (
    <div id="container">
      <div id="productInfo">
        <h1 id="productName">{product.title}</h1>
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

        {/* <button type="submit" onClick={(e) => checkQuantity(orderQuantity)}>
          Add To Cart
        </button> */}
      </form>
    </div>
  ) : (
    <h1>Product Not found</h1>
  );
};

export default ProductSingleView;
