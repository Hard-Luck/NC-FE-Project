import React from "react";
import { formatDate } from "../utils/date";

const CommentCard = ({ comment, deleteComment }) => {
  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>
        by: {comment.author} at {formatDate(comment.created_at)}
      </p>
      <button onClick={() => deleteComment(comment.comment_id)}>Delete</button>
    </div>
  );
};

export default CommentCard;
