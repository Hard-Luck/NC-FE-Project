import React, { useEffect } from "react";
import { useReviewVotes } from "../hooks/useReviewVotes";
import { formatDate } from "../utils/date";
import Comments from "./Comments";
import { idGen } from "../utils/idGen";

const DetailedReviewCard = ({ review }) => {
  const key = idGen();
  useEffect(() => {}, [review]);
  const { votes, upvote, downvote } = useReviewVotes(
    review.review_id,
    review.votes
  );
  return (
    <main>
      <div className="detailed-card">
        <img
          className="rev-detailed-avatar"
          src={review.review_img_url}
          alt=""
        />
        <div className="detail-card-text">
          <h1>{`${review.title} by ${review.owner}`}</h1>
          <p>{formatDate(review.created_at)}</p>
          <p>{review.review_body}...</p>
        </div>
        <div className="clickable">
          <a href="#main">
            Comments: {review.comment_count} Votes: {votes}
          </a>
        </div>
        <button onClick={downvote}>👎</button>
        <button onClick={upvote}>👍</button>
      </div>
      <details>
        <summary>Comments</summary>
        <Comments key={key()} review_id={review.review_id} />
      </details>
    </main>
  );
};

export default DetailedReviewCard;
