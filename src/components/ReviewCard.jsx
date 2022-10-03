import React from "react";
import { Link } from "react-router-dom";
import { useReviewVotes } from "../hooks/useReviewVotes";
import { formatDate } from "../utils/date";

const ReviewCard = ({ review }) => {
  const { votes, upvote, downvote } = useReviewVotes(
    review.review_id,
    review.votes
  );

  return (
    <article className="card grid-item">
      <div className="card-content">
        <img className="review-avatar" src={review.review_img_url} alt="" />
        <h3>
          <Link to={`/reviews/${review.review_id}`} state={{ review: review }}>
            {`${review.title}`}
          </Link>
        </h3>
        <h4>{` by ${review.owner}`}</h4>
        <p>{formatDate(review.created_at)}</p>
        <p>{review.review_body.slice(0, 20)}...</p>
      </div>
      <div className="clickable">
        <a href="#main">
          Comments: {review.comment_count} Votes: {votes}
        </a>
      </div>
      <div className="btn-container">
        <button className="like-btn" onClick={downvote}>
          👎
        </button>
        <button className="like-btn" onClick={upvote}>
          👍
        </button>
      </div>
    </article>
  );
};

export default ReviewCard;
