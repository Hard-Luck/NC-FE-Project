import { useState } from "react";

export const useVotes = (initial) => {
  const [votes, setVotes] = useState(initial);

  const upvote = () => {
    setVotes((votes) => votes + 1);
  };

  const downvote = () => {
    setVotes((votes) => Math.max(0, votes - 1));
  };

  return { votes, upvote, downvote };
};
