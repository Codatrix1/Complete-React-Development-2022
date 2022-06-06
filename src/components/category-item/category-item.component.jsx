import React from "react";
import "./category-item.styles.scss";

//-----------------
// React Component
//-----------------
const CategoryItem = ({ category }) => {
  const { title, imageUrl, size } = category;
  return (
    <div className={`category-container ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

//----------------
// Default Export
//----------------
export default CategoryItem;
