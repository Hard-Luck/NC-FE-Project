import React from "react";
import "./CategoryCard.css";

const Category = ({ category }) => {
  return (
    <div className="card">
      <h1>{category.slug}</h1>
      <p>{category.description}</p>
    </div>
  );
};
export default Category;
