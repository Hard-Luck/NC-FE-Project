import React from "react";
import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
import "./Reviews.css";
import { useReviews } from "../hooks/useReviews";
import { apiUrl } from "../utils/apiURL";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { data, loading, error, forwardPage, backPage } = useReviews(
    apiUrl + "/reviews"
  );

  useEffect(() => {
    setReviews(data.reviews);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) console.error(error);
  return (
    reviews && (
      <main className="reviews-container">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
        <button onClick={backPage}>Previous Page</button>
        <button onClick={forwardPage}>Next Page</button>
      </main>
    )
  );
};

export default Reviews;
