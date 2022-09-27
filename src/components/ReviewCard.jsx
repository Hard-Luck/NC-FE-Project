import React, { useState } from "react";
import { formatDate } from "../utils/date";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const [votes, setVotes] = useState(review.votes);
  const handleClick = () => {
    setVotes((votes) => votes + 1);
  };

  return (
    <article className="card">
      <div className="content">
        <img className="review-avatar" src={review.review_img_url} alt="" />
        <h1>{`${review.title} by ${review.owner}`}</h1>
        <p>{formatDate(review.created_at)}</p>
        <p>{review.review_body.slice(0, 100)}...</p>
      </div>
      <div className="clickable">
        <a href="#main">Comments: {review.comment_count}</a>
        <button onClick={handleClick}>👍 :{votes}</button>
      </div>
    </article>
  );
};

export default ReviewCard;
