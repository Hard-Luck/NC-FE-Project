import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import "./Categories.css";
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
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link to={`/reviews/${category.slug}`} category={category}>
                <CategoryCard category={category} />
              </Link>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Categories;
