import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/apiURL";

export const useReviewVotes = (review_id, initial) => {
  const [votes, setVotes] = useState(initial);
  const [error, setError] = useState(null);

  const apiVoteUpdate = async (num) => {
    const body = { inc_votes: num };
    try {
      await axios.patch(apiUrl + `/reviews/${review_id}`, body);
    } catch (e) {
      alert("Error vote not counted try again");
      setVotes((vote) => vote - num);
    }
  };
  useEffect(() => {
    if (error) alert(error);
    setError(null);
  }, [error]);

  const upvote = () => {
    setVotes((votes) => votes + 1);
    apiVoteUpdate(1);
  };

  const downvote = () => {
    setVotes((votes) => Math.max(0, votes - 1));
    if (votes > 0) apiVoteUpdate(-1);
  };

  return { votes, upvote, downvote };
};
