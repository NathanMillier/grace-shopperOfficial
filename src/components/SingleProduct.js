import React from "react";
import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
// THIS IS A

const SingleProduct = ({ item }) => {
  return (
    <div className="singleProductCont">
      <div className="circle" />
      <img src={item.img} />

      <div className="infoCont">
        <div className="prodIcon">
          <ShoppingCartOutlined />
        </div>
        <div className="prodIcon">
          <SearchOutlined />
        </div>
        <div className="prodIcon">
          <FavoriteBorder />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
