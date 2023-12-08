import axiosClient from "./axiosClient";

const apiUpdateItem = {
  putAddItem(data, id) {
    const url = `/cart_item/${id}`;
    return axiosClient.put(url, data);
  },
};
export default apiUpdateItem;
