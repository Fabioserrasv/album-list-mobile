import axios from "axios";
import { API_URL } from "@/config/env";

const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60;

export const apiAxios = axios.create({
  baseURL: API_URL || "http://192.168.1.3:8000",
  timeout: ONE_MINUTE,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
});
