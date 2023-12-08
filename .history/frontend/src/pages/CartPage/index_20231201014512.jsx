import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header";
import CartList from "../../components/CartList";
import { useCart } from "../../contexts/CartContext";

export default function CartPage() {
  const { cartItems } = useCart();
  return (
    <>
      <Header cartItems={products.cartItems} />
      <CartList />
    </>
  );
}
