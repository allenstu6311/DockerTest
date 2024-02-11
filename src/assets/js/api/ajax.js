import axios from "axios";
import apiHandle from "./apiHandle";

const localAPI = false;
const http = axios.create({
  baseURL: localAPI
    ? "http://localhost:5174/json"
    : import.meta.env.VITE_BASE_URL,
});

http.interceptors.request.use(
  (config) => {
    config.data = { unused: 0 };
    let token = "token";
    // config.headers["Content-type"] = "application/json";
    config.headers["Authorization"] = "Bearer" + token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

let responseData = "";

export const getProductInfo = async (param) => {
  try {
    let url = localAPI
      ? "/product/product.json"
      : `/products${param ? "/" + param.id : ""}`;

    responseData = await http.get(url);
    responseData = apiHandle.handleProductInfo(responseData);

    return Promise.resolve(responseData);
  } catch (err) {
    return Promise.reject(responseData);(err);
  }
};
