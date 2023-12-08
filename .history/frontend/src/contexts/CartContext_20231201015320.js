// CartContext.js
import { createContext, useContext, useState, useEffect } from "react";
import apiCart from "../components/API/apiCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const updateCartItems = async () => {
    try {
      const response = await apiCart.getAllCart();
      setCartItems(response.data.cartItems);
    } catch (error) {
      console.error("Error fetching cart products:", error);
    }
  };

  useEffect(() => {
    updateCartItems();
  }, []);

  useEffect(() => {
    // Listen for a custom event "cartUpdated" and update the cart items
    const handleCartUpdated = () => {
      updateCartItems();
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
