import React from "react";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { useComments } from "../hooks/useComments";

const Comments = ({ review_id }) => {
  const { comments, loading, error, setComments, deleteComment } =
    useComments(review_id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404: Comments not found</p>;
  return (
    comments && (
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                deleteComment={deleteComment}
              />
            );
          })
        ) : (
          <p>No comments on this post</p>
        )}
        <AddComment setComments={setComments} review_id={review_id} />
      </div>
    )
  );
};

export default Comments;
