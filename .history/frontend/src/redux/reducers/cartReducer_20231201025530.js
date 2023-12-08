// src/store/reducers/cartReducer.js
const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
    // ... other cart-related properties
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const newItem = action.payload;
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          totalPrice: state.totalPrice + newItem.price,
          totalQuantity: state.totalQuantity + 1,
        };
      case 'REMOVE_FROM_CART':
        const removedItemId = action.payload;
        const removedItem = state.cartItems.find(item => item.id === removedItemId);
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== removedItemId),
          totalPrice: state.totalPrice - (removedItem ? removedItem.price : 0),
          totalQuantity: state.totalQuantity - 1,
        };
      // ... other cart-related cases
      default:
        return state;
    }
  };
  
  export default cartReducer;
  