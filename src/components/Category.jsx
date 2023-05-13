import React from "react";
import "./Category.css";

const Category = ({ name, id, img }) => {
  return (
    <div className="category_card" id={id}>
      <img src={img} alt="not found" />
      <div className="category-textOverlay">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Category;
