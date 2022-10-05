import { useParams } from "react-router-dom";
import DetailedReviewCard from "../components/DetailedReviewCard";
import { useSingleReview } from "../hooks/useSingleReview";

const SingleReview = () => {
  const { review_id } = useParams();
  const { data, loading, error } = useSingleReview(review_id);
  if (loading) return <p>Loading...</p>;
  if (error) return <h1>404: review notfound</h1>;
  return data && <DetailedReviewCard review={data.review} />;
};

export default SingleReview;
