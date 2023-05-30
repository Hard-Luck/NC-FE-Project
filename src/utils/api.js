import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-games-api-mt.onrender.com/api",
});

export const getReview = async (review_id) => {
  try {
    const { data } = await api.get(`/reviews/${review_id}`);
    return data;
  } catch {
    throw new Error("Could Not Retrieve Data");
  }
};

export const getReviews = async (queries) => {
  try {
    const { data } = await api.get("/reviews", { params: queries });
    return data;
  } catch {
    throw new Error("Could Not Retrieve Data");
  }
};

export const getCategories = async () => {
  try {
    const { data } = await api.get("/categories");
    return data;
  } catch {
    throw new Error("Could Not Retrieve Data");
  }
};

export const getCategory = async (category, queries) => {
  try {
    const { data } = await api.get(`/reviews`, {
      params: { ...queries, category: category },
    });
    return data;
  } catch (err) {
    throw new Error("Could Not Retrieve Data");
  }
};
export const getComments = async (review_id) => {
  try {
    const { data } = await api.get(`/reviews/${review_id}/comments`);
    return data;
  } catch (err) {
    throw new Error("Could Not Retrieve Data");
  }
};

export const removeComment = async (comment_id) => {
  try {
    api.delete(`/comments/${comment_id}`);
  } catch (err) {
    throw new Error("Could Not Delete Comment");
  }
};

export const postComment = async (review_id, body) => {
  try {
    await api.post(`/reviews/${review_id}/comments`, body);
  } catch (err) {
    throw new Error("Could Not Delete Comment");
  }
};

export const upvoteComment = async (review_id, num) => {
  const body = { inc_votes: num };
  try {
    await api.patch(`/reviews/${review_id}`, body);
  } catch (e) {
    alert("Error vote not counted try again");
  }
};
