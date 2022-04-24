import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="categoriesCont">
      {/* BELOW WE NEED TO MAP THROUGH OUR DB FOR THE CATEGORIES TO DISPLAY THEM INSTEAD OF FROM THE DUMMYDATA PAGE */}

      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
