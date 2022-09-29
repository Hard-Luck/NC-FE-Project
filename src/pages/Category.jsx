import React, { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
import { useReviews } from "../hooks/useReviews";
import { apiUrl } from "../utils/apiURL";

const Category = (props) => {
  const [reviews, setReviews] = useState([]);
  const { data, loading, error, forwardPage, backPage, queries, setQueries } =
    useReviews(apiUrl + "/reviews");

  useEffect(() => {
    setReviews(data.reviews);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) console.error(error);
  return reviews && reviews.length > 0 ? (
    <main className="reviews-container">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
      <button onClick={backPage}>Previous Page</button>
      <button onClick={forwardPage}>Next Page</button>
    </main>
  ) : (
    <p>Category not found</p>
  );
};

export default Category;
