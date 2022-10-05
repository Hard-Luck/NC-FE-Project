import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../utils/api";

export const useSingleReview = () => {
  const { review_id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await getReview(review_id);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [review_id]);
  return { data, loading, error };
};
