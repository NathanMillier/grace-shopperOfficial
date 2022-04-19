import React from "react";

import { useEffect } from "react";

const Products = ({ products, fetchProducts }) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default Products;
