import { Link } from "react-router-dom";
// import { APIURL } from "./App";
import React, { useState } from "react";

const Products = ({ products, token, setProducts, fetchProducts }) => {
  const deleteProduct = async (PRODUCT_ID) => {
    const filteredArray = products.filter(
      (item) => item._id !== `${PRODUCT_ID}`
    );
    setProducts(filteredArray);
    try {
      const resp = await fetch(`${APIURL}/products/${PRODUCT_ID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const info = resp.json();
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="productsHeader">
        <h1>Shoes</h1>
      </div>
      <div className="productsSubHead">
        <Link to="/newproduct">Add New Shoe?</Link>
        <input
          placeholder="What cha lookin for?..."
          value={""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {products.map((products) => (
        <div className="productsCard" key={products._id}>
          <h2>{products.title}</h2>
          <p>{products.description}</p>
          <h3>{products.stock}</h3>
          <h3>{products.price}</h3>

          {/* {post.isAuthor && <button onClick={editPost}>Edit</button>} */}
          {products.isAuthor && (
            <button
              value={products._id}
              onClick={(e) => {
                const id = e.target.value;
                deleteProduct(id);
              }}
            >
              Delete
            </button>
          )}

          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default Products;
