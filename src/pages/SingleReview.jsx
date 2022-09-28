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
    console.log(data);
    setReview(data.review);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return console.error(error);
  return review && <DetailedReviewCard review={review} />;
};

export default SingleReview;
