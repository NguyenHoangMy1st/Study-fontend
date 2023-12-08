// src/store/actions/cartActions.js

import apiCart from "../../components/API/apiCart";
import apiUpdateItem from "../../components/API/apiUpdateItem";

export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const setTotalPrice = (totalPrice) => ({
  type: "SET_TOTAL_PRICE",
  payload: totalPrice,
});
export const fetchCart = () => async (dispatch) => {
  try {
    const response = await apiCart.getAllCart();
    dispatch(setProducts(response.data));

    // Cập nhật giá trị totalPrice nếu có trong dữ liệu trả về từ API
    const totalPrice = response.data.totalPrice;
    if (totalPrice !== undefined) {
      dispatch(setTotalPrice(totalPrice));
    }
  } catch (error) {
    console.error(error);
  }
};

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});
export const updateCartItem = (updatedData, productId) => {
  return async (dispatch) => {
    try {
      // Gọi API để cập nhật sản phẩm trong giỏ hàng
      await apiUpdateItem.putUpdateItem(updatedData, productId);

      // Sau khi cập nhật thành công, gọi hàm fetchCart để lấy lại danh sách giỏ hàng mới
      const response = await apiCart.getAllCart();
      dispatch(setProducts(response.data));

      // Cập nhật giá trị totalPrice nếu có trong dữ liệu trả về từ API
      const totalPrice = response.data.totalPrice;
      if (totalPrice !== undefined) {
        dispatch(setTotalPrice(totalPrice));
      }
    } catch (error) {
      console.error("Có lỗi khi cập nhật sản phẩm trong giỏ hàng", error);
    }
  };
};
// ... other cart-related action creators
