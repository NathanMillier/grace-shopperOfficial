import React from "react";
import { popularProducts } from "../data";
import SingleProduct from "./SingleProduct";

const AllPopProducts = () => {
  return (
    <>
      <div className="popProductsHead">
        <h1>MOST POPULAR</h1>
      </div>
      <div className="popProductsCont">
        {popularProducts.map((item) => (
          <SingleProduct item={item} key={item.id} />
        ))}
      </div>
      <div className="popProductsFoot">
        <button>SEE MORE</button>
      </div>
    </>
  );
};

export default AllPopProducts;
