// import Vue from "vue";
import axios from "axios";

// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
// axios.defaults.headers.common["Authorization"] = "Bearer YOUR_ACCESS_TOKEN";

// Vue.use({
//   install(Vue) {
//     Vue.prototype.$http = axios.create({
//       baseURL: "https://accounts.spotify.com/api",
//       headers: {
//         post: { "Content-Type": "application/x-www-form-urlencoded" },
//       },
//     });
//   },
// });

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
  //   params: {
  //     grant_type: "authorization_code",
  //   },
});

export default api;
