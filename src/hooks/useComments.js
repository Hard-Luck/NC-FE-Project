import { useState, useEffect } from "react";
import { getComments, removeComment } from "../utils/api.js";

export const useComments = (review_id) => {
  const [comments, setComments] = useState([]);
  const [cashedComment, setCashedComment] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async (id) => {
      setLoading(true);
      try {
        const data = await getComments(id);
        console.log(data);
        setComments(data.comments);
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    fetchComments(review_id);
  }, [review_id]);

  useEffect(() => {
    if (error) {
      setComments((curr) => [cashedComment[0], ...curr]);
    }
    setError(null);
  }, [error, cashedComment, setComments]);

  const deleteComment = async (comment_id) => {
    setCashedComment(
      comments.filter((comment) => comment.comment_id === comment_id)
    );
    setComments(
      comments.filter((comment) => comment.comment_id !== comment_id)
    );
    try {
      await removeComment(comment_id);
    } catch (e) {
      alert("Error delete failed");
      setError(true);
    }
  };
  return { comments, loading, error, setComments, deleteComment };
};
