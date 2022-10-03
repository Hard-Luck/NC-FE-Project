import React from "react";

const Category = ({ category }) => {
  return (
    <div className="cat-card">
      <h1>{category.slug}</h1>
      <p className="slug">{category.description}</p>
    </div>
  );
};
export default Category;
