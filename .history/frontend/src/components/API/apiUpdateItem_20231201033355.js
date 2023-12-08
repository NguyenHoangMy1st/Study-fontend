import axiosClient from "./axiosClient";

const apiUpdateItem = {
  putAddItem(id) {
    const url = `/cart_item/${id}`;
    return axiosClient.put(url, data);
  },
};
export default apiUpdateItem;
