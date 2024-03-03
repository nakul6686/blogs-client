import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/", // "https://blogs-server-vare.onrender.com/",
  timeout: 4000,
  //   headers: { "X-Custom-Header": "foobar" },
});
axiosInstance.interceptors.request.use(
  (config) => {
    if (config.url === "/login" || config.url === "/register") {
      // Do not add the authorization header for these requests
      return config;
    }
    // Add AuthToken and any other things you have to add  with
    // confg.AuthToken = somethiing;

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error)
  }
);

export default axiosInstance;
