import React from "react";

import { useEffect } from "react";

<<<<<<< HEAD
const Products = ({ products, fetchProducts }) => {
=======
const Products = ({ products, fetchProducts, addItemToCart }) => {
>>>>>>> 3381810bc4c84d08fc7fdc3e92fc4b9f527dd9f3
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((p) => {
        return (
          <div key={p.id} id="card">
            <div>{p.title}</div>
            <div>{p.price}$</div>
            <img src={p.imgurl} width="300" height="300"></img>
            <button
              onClick={() => {
                console.log("clickefd");
                addItemToCart(p);
              }}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
