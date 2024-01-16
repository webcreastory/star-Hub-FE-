import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true, // withCredentials를 추가하여 CORS 문제를 해결
});

// Request Interceptor: 모든 요청에 토큰을 자동으로 포함
instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  }
);

export default instance;
