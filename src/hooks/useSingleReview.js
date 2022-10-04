import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../utils/api";

export const useReview = () => {
  const [data, setData] = useState([]);
  const { review_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const review = await getReview(review_id);
        setData(review);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
