import React from "react";
import { popularProducts } from "../data";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  return (
    <>
      <div className="popProductsHead">
        <h1>MOST POPULAR</h1>
        <button>SEE ALL!</button>
      </div>
      <div className="popProductsCont">
        {popularProducts.map((item) => (
          <SingleProduct item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
