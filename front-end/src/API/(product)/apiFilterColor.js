import axiosClient from "../axiosClient";

const apiFilerColor = {
  getProductByBrand(color) {
    const url = `/products/?color=${color}&size=&minPrice=0&maxPrice=1000000&minDiscount=0&brand=&stock=null&sort=price_low&pageNumber=0&pageSize=10`;
    return axiosClient.get(url);
  },
};
export default apiFilerColor;
