// src/store/actions/cartActions.js
export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});

// ... other cart-related action creators
