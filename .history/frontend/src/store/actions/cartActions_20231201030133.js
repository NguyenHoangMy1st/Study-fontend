// src/store/actions/cartActions.js


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

// ... other cart-related action creators
