import React from "react";
import { useFetch } from "../hooks/useFetch";

const cat = () => {
  const { data, loading, error } = useFetch(
    "https://nc-be-project-nc-games.herokuapp.com/api/categories"
  );
  if (loading) return <p>Loading...</p>;
  if (error) console.error(error);
  return <div>{data}</div>;
};

export default cat;
