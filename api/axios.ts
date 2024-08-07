import axios from "axios";

export default axios.create({
  // baseURL: "https://api.rawg.io/api/",
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
