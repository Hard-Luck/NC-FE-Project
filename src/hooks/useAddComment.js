import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/apiURL";

export const useAddComment = (review_id, setComments) => {
  const [error, setError] = useState(null);
  const [comment, setComment] = useState({
    body: "",
    author: "",
    created_at: Date.now(),
  });
  const addComment = async () => {
    const body = { body: comment.body, username: comment.author };
    try {
      await axios.post(apiUrl + `/reviews/${review_id}/comments`, body);
    } catch (e) {
      alert("Error comment failed");
      setComments((curr) => [...curr].slice(0, curr.length - 1));
    }
  };
  useEffect(() => {
    if (error) alert(error);
    setError(null);
  }, [error]);

  const handleChange = (e) => {
    setComment((curr) => {
      return { ...curr, body: e.target.value };
    });
  };

  const handleAuthor = (e) => {
    setComment((curr) => {
      return { ...curr, author: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (comment.body && comment.author) {
      setComments((curr) => {
        return [...curr, comment];
      });
      setComment({
        body: "",
        author: "",
        created_at: Date.now(),
      });
      addComment();
    }
  };
  return {
    comment,
    setComment,
    addComment,
    handleChange,
    handleAuthor,
    handleClick,
  };
};
