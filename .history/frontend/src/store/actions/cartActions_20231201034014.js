// src/store/actions/cartActions.js

import apiCart from "../../components/API/apiCart";

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
export const updateCartItem = (productId, updatedData) => {
  return async (dispatch) => {
    try {
      // Gọi API để cập nhật sản phẩm trong giỏ hàng
      await apiUpdateItem.putUpdateItem(updatedData, productId);

      // Sau khi cập nhật thành công, gọi hàm fetchCart để lấy lại danh sách giỏ hàng mới
      dispatch(fetchCart());
    } catch (error) {
      console.error("Có lỗi khi cập nhật sản phẩm trong giỏ hàng", error);
    }
  };
};
// ... other cart-related action creators
