import React from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useCategory } from "../hooks/useCategory";

const Category = () => {
  const { category } = useParams();
  const {
    data: reviews,
    loading,
    error,
    forwardPage,
    backPage,
  } = useCategory(category);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404: category not found</p>;
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

export default Category;
