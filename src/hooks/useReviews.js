import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

export const useReviews = (url, allReviews = true) => {
  const [data, setData] = useState([]);
  let [, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [queries, setQueries] = useState({
    p: 1,
    sort_by: "created_at",
    order: "desc",
  });
  const { category } = useParams();

  useEffect(() => {
    setQueries((current) => {
      if (category && current.category !== category) {
        return { ...current, category: category };
      }
      return current;
    });
    const getData = async (apiUrl) => {
      setLoading(true);
      setIsMounted(true);
      try {
        const response = await axios.get(apiUrl, {
          params: queries,
        });
        if (allReviews) setData(response.data);
        else if (isMounted) setData(response.data);
      } catch (error) {
        if (isMounted) setError(error);
      } finally {
        setLoading(false);
        setIsMounted(false);
      }
    };
    getData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, setQueries, queries]);

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
        return { sort_by: query, ...current };
      });
    }
  };
  const changeOrder = (e) => {
    e.preventDefault();
    const flip = new Map([
      ["asc", "desc"],
      ["desc", "asc"],
    ]);
    const newOrder = flip.get(queries.order);

    setQueries((curr) => {
      return { ...curr, order: newOrder };
    });
    setSearchParams((current) => {
      return { ...current, order: newOrder };
    });
  };

  return {
    data,
    loading,
    error,
    queries,
    forwardPage,
    backPage,
    changeSort,
    changeOrder,
    setQueries,
  };
};
