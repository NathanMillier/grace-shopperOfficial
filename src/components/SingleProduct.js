import React from "react";
import { Link } from "react-router-dom";

import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
// THIS IS A

const SingleProduct = ({ item, key }) => {
  console.log(key);
  return (
    <div className="singleProductCont">
      <div className="circle" />
      <img src={item.imgurl} />
      <Link to={`./:${key}`}>
        <div className="infoCont">
          <div className="prodIcon">{/* <ShoppingCartOutlined /> */}</div>
          <div className="prodIcon">{/* <SearchOutlined /> */}</div>
          <div className="prodIcon">{/* <FavoriteBorder /> */}</div>
        </div>
      </Link>
    </div>
  );
};

export default SingleProduct;
