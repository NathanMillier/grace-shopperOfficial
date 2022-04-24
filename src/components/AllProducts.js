import React from "react";
// import { getProducts } from "../../db/products";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  return (
    <>
      <div className="popProductsHead">
        <h1>MOST POPULAR</h1>
        {/* <button>SEE ALL</button> */}
      </div>
      <div className="popProductsCont">
        {/* {getProducts.map((item) => (
          <SingleProduct item={item} key={item.id} />
        ))} */}
      </div>
    </>
  );
};

export default AllProducts;
