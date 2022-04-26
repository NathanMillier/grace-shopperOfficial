import React from "react";
// import AllProducts from "../components/AllProducts";

const AllProducts = () => {
  return (
    <div className="allProductsCont">
      <div className="title">
        <h1>Shoes</h1>
      </div>
      <div className="filterCont">
        <div className="filter">
          <div className="filterText">Filter Products:</div>
          <select>
            <div className="filterText"></div>
            <option disabled>Brand</option>
            <option>Nike</option>
            <option>Adidas </option>
            <option>Timberland </option>
            <option>Speedo</option>
          </select>
          <select>
            <div className="filterText"></div>
            <option disabled>Size</option>
            <option>6 </option>
            <option>7 </option>
            <option>8 </option>
            <option>9 </option>
            <option>10 </option>
            <option>11 </option>
            <option>12 </option>
          </select>
        </div>
        <div className="filter">
          <div className="filterText">Filter Prices:</div>
          <select>
            <div className="filterText"></div>
            <option disabled>Price Range</option>
            <option>$1-$100 </option>
            <option>$100-$200 </option>
          </select>
        </div>
      </div>
      {/* <PopularProducts /> */}
    </div>
  );
};

export default AllProducts;
