import axiosClient from "./axiosClient";

const apiUpdateItem = {
  putAddItem(data) {
    const url = "/cart/add";
    return axiosClient.put(url, data);
  },
};
export default apiAddItem;
