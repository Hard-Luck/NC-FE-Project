import { useEffect, useState } from "react";
import { upvoteComment } from "../utils/api";

export const useReviewVotes = (review_id, initial) => {
  const [votes, setVotes] = useState(initial);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) alert(error);
    setError(null);
  }, [error]);

  const upvote = () => {
    setVotes((votes) => votes + 1);
    upvoteComment(review_id, 1);
  };

  const downvote = () => {
    setVotes((votes) => Math.max(0, votes - 1));
    if (votes > 0) upvoteComment(review_id, -1);
  };

  return { votes, upvote, downvote };
};
