import React from "react";
import { useAddComment } from "../hooks/useAddComment";
const Comment = ({ review_id, setComments }) => {
  const { comment, handleChange, handleAuthor, handleClick } = useAddComment(
    review_id,
    setComments
  );

  return (
    <form>
      <label htmlFor="comment-text">Comment</label>
      <textarea
        value={comment.body}
        onChange={handleChange}
        id="comment-text"
        rows="5"
        required
      />
      <label htmlFor="author">Author</label>
      <input
        id="author"
        type="text"
        value={comment.author}
        onChange={handleAuthor}
        required
      />
      <button onClick={handleClick}> comment</button>
    </form>
  );
};

export default Comment;
