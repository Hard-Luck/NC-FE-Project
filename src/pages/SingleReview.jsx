import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../utils/apiURL";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import DetailedReviewCard from "../components/DetailedReviewCard";

const SingleReview = () => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();
  const { data, loading, error } = useFetch(apiUrl + `/reviews/${review_id}`);
  useEffect(() => {
    setReview(data.review);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <h1>404: review notfound</h1>;
  return review && <DetailedReviewCard review={review} />;
};

export default SingleReview;
