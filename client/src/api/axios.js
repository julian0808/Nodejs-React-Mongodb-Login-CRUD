import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api", // Use http for local dev unless HTTPS is configured
  withCredentials: true, // Needed for cookies/session handling
});

export default instance;
