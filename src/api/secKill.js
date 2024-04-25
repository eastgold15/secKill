import request from "@/utils/reques";

// // 注册接口
// export const userRegisterService = ({ username, password, repassword }) =>
//   request.post("/api/reg", { username, password, repassword });

export const getShopItem = () => {
  return request.get("/api/commodities/1");
};
