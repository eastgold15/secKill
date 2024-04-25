import axios from "axios";
// import router from "@/router";
import { ElMessage } from "element-plus";
// import { VITE_API_BASE_URL } from "virtual:/env"; // Vite 自动提供的虚拟模块来访问环境变量
const baseURL = "http://localhost:8080";

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
    if (res.code === 0) {
      return res;
    }
    ElMessage({ message: res.msg || "请求成功", type: "success" });
    return Promise.reject(res.data);
  },
  (err) => {
    ElMessage({
      message: err.msg || "服务异常",
      type: "error",
    });
    console.log(err);
    // if (err.response?.status === 401) {
    //   router.push("/login");
    // }
    return Promise.reject(err);
  }
);

export default instance;
export { baseURL };
