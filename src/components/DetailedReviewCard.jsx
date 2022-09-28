import React from "react";
import { useReviewVotes } from "../hooks/useReviewVotes";
import { formatDate } from "../utils/date";
import "./DetailedReviewCard.css";
import Comments from "./Comments";

const DetailedReviewCard = ({ review }) => {
  const { votes, upvote, downvote } = useReviewVotes(
    review.review_id,
    review.votes
  );
  return (
    <main>
      <div className="card">
        <img className="review-avatar" src={review.review_img_url} alt="" />
        <h1>{`${review.title} by ${review.owner}`}</h1>
        <p>{formatDate(review.created_at)}</p>
        <p>{review.review_body}...</p>
      </div>
      <div className="clickable">
        <a href="#main">
          Comments: {review.comment_count} Votes: {votes}
        </a>
        <button onClick={downvote}>👎</button>
        <button onClick={upvote}>👍</button>
      </div>
      <details>
        <summary>Comments</summary>
        <Comments review_id={review.review_id} />
      </details>
    </main>
  );
};

export default DetailedReviewCard;
