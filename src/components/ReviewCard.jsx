import React from "react";
import { Link } from "react-router-dom";
import { useVotes } from "../hooks/useVotes";
import { formatDate } from "../utils/date";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const { votes, upvote } = useVotes(review.votes);

  return (
    <article className="card">
      <div className="content">
        <img className="review-avatar" src={review.review_img_url} alt="" />
        <h1>
          <Link to={`/reviews/${review.review_id}`} state={{ review: review }}>
            {`${review.title} by ${review.owner}`}
          </Link>
        </h1>
        <p>{formatDate(review.created_at)}</p>
        <p>{review.review_body.slice(0, 100)}...</p>
      </div>
      <div className="clickable">
        <a href="#main">Comments: {review.comment_count}</a>
        <button onClick={upvote}>👍 :{votes}</button>
      </div>
    </article>
  );
};

export default ReviewCard;
