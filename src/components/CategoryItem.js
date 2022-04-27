import React from "react";

function CategoryItem({ item }) {
  return (
    <div className="catItemCont">
      <img src={item.img} />
      <div classname="catInfo">
        <h2>{item.title}</h2>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default CategoryItem;
