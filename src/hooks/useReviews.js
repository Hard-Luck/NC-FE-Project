import { useState, useEffect } from "react";
import axios from "axios";

export const useReviews = (url, queries) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const backPage = (e) => {
    e.preventDefault();
    setPage((page) => Math.max(0, page - 1));
  };
  const forwardPage = (e) => {
    e.preventDefault();
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const getData = async (apiUrl) => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl, {
          params: { p: page, ...queries },
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData(url);
  }, [url, page]);
  return { data, loading, error, forwardPage, backPage };
};
