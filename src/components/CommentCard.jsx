import React from "react";
import { formatDate } from "../utils/date";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>
        by: {comment.author} at {formatDate(comment.created_at)}
      </p>
    </div>
  );
};

export default CommentCard;
