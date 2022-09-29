import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, queries = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (apiUrl, params) => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl, { params: params });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (!url.includes("undefined")) getData(url);
  }, [url]);
  return { data, loading, error };
};
