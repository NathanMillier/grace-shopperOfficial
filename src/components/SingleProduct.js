import React from "react";

// THIS IS A

const SingleProduct = ({ item }) => {
  return (
    <div className="singleProductCont">
      <div className="circle"></div>
      <img src="" alt="" />
      <div className="infoCont">
        <div className="prodIcon">{/* <ShoppingCartOutlined /> */}</div>
        <div className="prodIcon">{/* <SearchOutlined /> */}</div>
        <div className="prodIcon">{/* <FavoriteBorder /> */}</div>
      </div>
    </div>
  );
};

export default SingleProduct;
