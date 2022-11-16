import axios from "axios";

export default axios.create({
  baseURL: "https://econnectmedia.herokuapp.com/api/v1",
  // withCredentials: true,
  // credentials: "include",
});
