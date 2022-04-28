import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

import SingleProduct from "./SingleProduct";

const AllProducts = ({ products }) => {
  console.log(products);
  return (
    <>
      <hr></hr>
      <div className="popProductsHead">
        <h1>ALL SHOES</h1>
      </div>
      <div className="popProductsCont">
        {products.map((item) => (
          <div className="singleProductCont">
            <div className="circle" />
            <img src={item.imgurl} />
            <Link to={`./${item.id}`}>
              <div className="infoCont">
                <div className="prodIcon">
                  <SearchOutlined />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
