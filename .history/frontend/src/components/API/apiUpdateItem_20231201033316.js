import axiosClient from "./axiosClient";

const api = {
  putAddItem(data) {
    const url = "/cart/add";
    return axiosClient.put(url, data);
  },
};
export default apiAddItem;
