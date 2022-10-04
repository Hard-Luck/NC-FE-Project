import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";

export const useCategories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { categories } = await getCategories();
        setData(categories);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return { data, loading, error };
};
