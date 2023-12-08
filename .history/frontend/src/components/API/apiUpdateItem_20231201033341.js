import axiosClient from "./axiosClient";

const apiUpdateItem = {
  putAddItem(data) {
    const url = "/cart_item/$";
    return axiosClient.put(url, data);
  },
};
export default apiUpdateItem;
