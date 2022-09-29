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
        <a href="#main">
          Comments: {review.comment_count} Votes: {votes}
        </a>
        <button onClick={downvote}>👎</button>
        <button onClick={upvote}>👍</button>
      </div>
    </article>
  );
};

export default ReviewCard;
