import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080/", // "http://kakao-app-env.eba-ggmpdnhz.ap-northeast-2.elasticbeanstalk.com/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
});

/**
    전체 상품 조회
**/
const getProducts = async (props) => {
  return await instance.get(`/products?page=${props}`);
};

const getProductDetails = async (props) => {
  return await instance.get(`/products/${props}`);
};

const getOptions = async (props) => {
  return await instance.get(`/products/${props}/option`);
};

const getOptionName = async (props) => {
  return await instance.get(`/options/${props}/name`);
};

const getCartList = async () => {
  return await instance.get("/carts");
};

const getOrderList = async (props) => {
  return await instance.get(`/orders/${props}`);
};

const deleteCart = async () => {
  return await instance.delete("/cart/clear");
};

export {
  getProducts,
  getProductDetails,
  getOptions,
  getCartList,
  getOrderList,
  getOptionName,
  deleteCart,
};
