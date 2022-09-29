import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const useReviews = (url) => {
  const [data, setData] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [queries, setQueries] = useState({
    p: 1,
    sort_by: "created_at",
    order: "desc",
  });

  useEffect(() => {
    const getData = async (apiUrl) => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl, {
          params: queries,
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData(url);
  }, [url, queries]);

  const backPage = (e) => {
    e.preventDefault();
    if (queries.p > 1) {
      setQueries((curr) => {
        return { ...curr, p: curr.p - 1 };
      });
    }
  };
  const forwardPage = (e) => {
    e.preventDefault();
    setQueries((curr) => {
      return { ...curr, p: curr.p + 1 };
    });
  };
  const changeSort = (e) => {
    e.preventDefault();
    const query = e.target.value;
    if (query && query !== queries.sort_by) {
      setQueries((curr) => {
        return { ...curr, sort_by: query };
      });
      setSearchParams((current) => {
        return { ...current, order_by: query };
      });
    }
  };

  return { data, loading, error, forwardPage, backPage, changeSort };
};
