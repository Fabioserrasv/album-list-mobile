import axios from "axios";
import { API_URL } from "@/config/env";

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;

export const apiAxios = axios.create({
  baseURL: API_URL,
  timeout: ONE_MINUTE,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
});

const ROUTE_POST_WITHOUT_CSRFTOKEN = [
  "/api/register",
  "/api/login",
  "/api/logout",
];

apiAxios.interceptors.request.use(
  async (config) => {
    if (
      config.method === "post" &&
      !ROUTE_POST_WITHOUT_CSRFTOKEN.includes(config.url!)
    ) {
      const response = await apiAxios.get("/api/csrftoken");
      const csrftoken = response.data.csrftoken;
      config.headers["x-csrftoken"] = csrftoken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error.data.error.message);
  }
);
