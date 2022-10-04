import React from "react";
import DetailedReviewCard from "../components/DetailedReviewCard";
import { useReview } from "../hooks/useSingleReview";

const SingleReview = () => {
  const { data, loading, error } = useReview();

  if (loading) return <p>Loading...</p>;
  if (error) return <h1>404: review notfound</h1>;
  return data && data.length > 0 && <DetailedReviewCard review={data} />;
};

export default SingleReview;
