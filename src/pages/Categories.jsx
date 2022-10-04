import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { useCategories } from "../hooks/useCategories";

const Categories = () => {
  const { data: categories, loading, error } = useCategories();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, please reload</p>;
  return (
    categories && (
      <main className="cat-container">
        {categories.map((category) => {
          return (
            <Link
              key={category.slug}
              to={`/${category.slug}`}
              category={category}>
              <CategoryCard category={category} />
            </Link>
          );
        })}
      </main>
    )
  );
};

export default Categories;
