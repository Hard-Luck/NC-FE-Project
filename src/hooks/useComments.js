import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../utils/apiURL";

export const useComments = () => {
  const [comments, setComments] = useState([]);
  const [cashedComment, setCashedComment] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      setComments((curr) => [cashedComment[0], ...curr]);
      console.log(comments);
    }
    setError(null);
  }, [error]);

  const deleteComment = async (comment_id) => {
    setCashedComment(
      comments.filter((comment) => comment.comment_id === comment_id)
    );
    setComments(
      comments.filter((comment) => comment.comment_id !== comment_id)
    );
    try {
      await axios.delete(apiUrl + `/comments/${comment_id}`);
    } catch (e) {
      alert("Error delete failed");
      setError(true);
    }
  };
  return { comments, setComments, deleteComment };
};
