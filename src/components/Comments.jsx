import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { apiUrl } from "../utils/apiURL";
import CommentCard from "./CommentCard";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const { data, loading, error } = useFetch(
    apiUrl + `/reviews/${review_id}/comments`
  );
  console.log(apiUrl + `/reviews/${review_id}/comments`);
  useEffect(() => {
    console.log(data);
    setComments(data.comments);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404: Comments not found</p>;
  return (
    comments &&
    comments.map((comment) => {
      return <CommentCard comment={comment} />;
    })
  );
};

export default Comments;
