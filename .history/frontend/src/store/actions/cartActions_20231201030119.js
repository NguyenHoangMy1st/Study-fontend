// src/store/actions/cartActions.js

import apiCart from '../API/apiCart';

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const setTotalPrice = (totalPrice) => ({
  type: 'SET_TOTAL_PRICE',
  payload: totalPrice,
});
export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});

// ... other cart-related action creators
