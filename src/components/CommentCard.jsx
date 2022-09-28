import React from "react";
import { formatDate } from "../utils/date";
import "./CommentCard.css";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>
        by: {comment.author} at {formatDate(comment.createdAt)}
      </p>
    </div>
  );
};

export default CommentCard;
