import React from "react";
import { useReviewVotes } from "../hooks/useReviewVotes";
import { formatDate } from "../utils/date";
import Comments from "./Comments";
import { idGen } from "../utils/idGen";

const DetailedReviewCard = ({ review }) => {
  const key = idGen();
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
        <Comments key={key()} review_id={review.review_id} />
      </details>
    </main>
  );
};

export default DetailedReviewCard;
