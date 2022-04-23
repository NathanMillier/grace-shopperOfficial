import React from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";


const Products = ({ products, fetchProducts, addItemToCart }) => {

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((p) => {
        console.log(p.id);
        return (
          <div key={p.id} id="card">
            <div>{p.title}</div>
            <div>{p.price}$</div>
            <img src={p.imgurl} width="300" height="300"></img>
            <Link to={`/products/${p.id}`}>Details</Link>
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
