import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { useFetch } from "../hooks/useFetch";
import { apiUrl } from "../utils/apiURL";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { data, loading, error } = useFetch(apiUrl + "/categories");

  useEffect(() => {
    setCategories(data.categories);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) console.error(error);
  return (
    categories && (
      <div>
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
      </div>
    )
  );
};

export default Categories;
