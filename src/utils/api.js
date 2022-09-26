import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-be-project-nc-games.herokuapp.com/api",
});

export const getReviews = async (page) => {
  try {
    const { data } = await api.get("/reviews", { params: { p: page } });
    return data;
  } catch {
    console.log("No reviews found!");
  }
};
