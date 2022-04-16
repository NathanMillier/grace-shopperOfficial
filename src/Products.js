import React from "react";
<<<<<<< HEAD
import { useEffect } from "react";

const Products = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

=======

import { useEffect } from "react";

const Products = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

>>>>>>> 7292303c49601094e2aa920fc432b40298976123
  return (
    <div>
      {products.map((p) => {
        return (
          <div key={p.id} id="card">
            <div>{p.title}</div>
            <div>{p.price}$</div>
          </div>
        );
      })}
    </div>
  );

};

export default Products;

