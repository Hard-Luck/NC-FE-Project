import React from "react";
import ReviewCard from "../components/ReviewCard";
import { useReviews } from "../hooks/useReviews";
import { apiUrl } from "../utils/apiURL";
import SortReviewForm from "../components/SortReviewForm";

const Reviews = () => {
  const {
    data,
    loading,
    error,
    forwardPage,
    backPage,
    changeSort,
    changeOrder,
  } = useReviews(apiUrl + "/reviews");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404: not found</p>;
  return (
    data &&
    data.length > 0 && (
      <main>
        <SortReviewForm changeSort={changeSort} changeOrder={changeOrder} />
        <div className="reviews-container">
          {data.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </div>
        <button onClick={backPage}>Previous Page</button>
        <button onClick={forwardPage}>Next Page</button>
      </main>
    )
  );
};

export default Reviews;
