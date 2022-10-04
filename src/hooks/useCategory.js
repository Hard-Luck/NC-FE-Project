import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategory } from "../utils/api";

export const useCategory = (category) => {
  const [data, setData] = useState([]);
  const [, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [queries, setQueries] = useState({
    p: 1,
    sort_by: "created_at",
    order: "desc",
  });

  useEffect(() => {
    const getData = async (category) => {
      setLoading(true);
      try {
        console.log(category);
        const { reviews } = await getCategory(category, queries);
        setData(reviews);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData(category);
  }, [category, queries]);

  useEffect(() => {
    setSearchParams(queries);
  }, [setSearchParams, queries]);

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
