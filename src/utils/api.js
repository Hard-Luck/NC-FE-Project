import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-be-project-nc-games.herokuapp.com/api/",
});

export const getReviews = async (page) => {
  try {
    const { data } = await api.get("/reviews", { params: { p: page } });
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

export const getCategory = async (category, page) => {
  try {
    const { data } = await api.get(`/reviews?category=${category}&p=${page}`, {
      params: { p: page },
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
