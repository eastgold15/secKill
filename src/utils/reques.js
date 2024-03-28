import axios from "axios";
import router from "@/router";
import { ElMessage } from "element-plus";

const baseURL = process.env.VITE_BASE_API;

const instance = axios.create({
  baseURL,
  timeout: 100000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res;
    }
    ElMessage({ message: res.data.message || "服务异常", type: "error" });
    return Promise.reject(res.data);
  },
  (err) => {
    ElMessage({
      message: err.response.data.message || "服务异常",
      type: "error",
    });
    console.log(err);
    if (err.response?.status === 401) {
      router.push("/login");
    }
    return Promise.reject(err);
  }
);

export default instance;
export { baseURL };
