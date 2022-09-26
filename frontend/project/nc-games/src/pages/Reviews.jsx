import React from "react";
import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "../components/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const addReviews = async () => {
      const { reviews } = await getReviews(page);
      if (reviews) setReviews(reviews);
    };
    addReviews();
  }, [page]);

  const backPage = (e) => {
    e.preventDefault();
    setPage((page) => Math.max(0, page - 1));
  };
  const forwardPage = (e) => {
    e.preventDefault();
    setPage((page) => page + 1);
  };

  return (
    <main className="reviews-container">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
      <button onClick={backPage}>Previous Page</button>
      <button onClick={forwardPage}>Next Page</button>
    </main>
  );
};

export default Reviews;
