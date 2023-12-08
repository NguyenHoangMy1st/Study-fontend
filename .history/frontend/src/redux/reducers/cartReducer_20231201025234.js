// cartReducer.js
const initialState = {
  cartItems: [],
  totalPrice: 0,
  // ... other cart-related properties
};

const cartReducer = (state = initialState, action) => {
  // Xử lý các hành động thay đổi trạng thái
  switch (action.type) {
    case "ADD_TO_CART":
      // Xử lý thêm sản phẩm vào giỏ hàng
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      // Xử lý xóa sản phẩm khỏi giỏ hàng
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    // ... other cart-related cases
    default:
      return state;
  }
};

export default cartReducer;
