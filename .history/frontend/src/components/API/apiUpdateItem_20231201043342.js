import axiosClient from "./axiosClient";

const apiUpdateItem = {
  putUpdateItem(data, id) {
    console.log(object)
    const url = `/cart_item/${id}`;
    return axiosClient.put(url, data);
  },
};
export default apiUpdateItem;
