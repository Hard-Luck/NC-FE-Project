import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { apiUrl } from "../utils/apiURL";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { useComments } from "../hooks/useComments";

const Comments = ({ review_id }) => {
  const { comments, setComments, deleteComment } = useComments();

  const { data, loading, error } = useFetch(
    apiUrl + `/reviews/${review_id}/comments`
  );
  useEffect(() => {
    setComments(data.comments);
  }, [data, setComments]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404: Comments not found</p>;
  return (
    <div>
      {comments && comments.length > 0 ? (
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
  );
};

export default Comments;
