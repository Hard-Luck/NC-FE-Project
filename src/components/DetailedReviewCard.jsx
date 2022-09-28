import React from "react";
import { useVotes } from "../hooks/useVotes";
import { formatDate } from "../utils/date";
import "./DetailedReviewCard.css";

const DetailedReviewCard = ({ review }) => {
  const { votes, upvote } = useVotes(review.votes);
  return (
    <main>
      <div className="card">
        <img className="review-avatar" src={review.review_img_url} alt="" />
        <h1>{`${review.title} by ${review.owner}`}</h1>
        <p>{formatDate(review.created_at)}</p>
        <p>{review.review_body}...</p>
      </div>
      <div className="clickable">
        <a href="#main">Comments: {review.comment_count}</a>
        <button onClick={upvote}>👍 :{votes}</button>
      </div>
    </main>
  );
};

export default DetailedReviewCard;
