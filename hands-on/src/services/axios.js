// import Vue from "vue";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com",
  headers: {
    post: { "Content-Type": "application/x-www-form-urlencoded" },
  },
});

export const apiToken = axios.create({
  baseURL: "https://accounts.spotify.com/api/token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default api;
