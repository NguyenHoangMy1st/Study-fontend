import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header";
import CartList from "../../components/CartList";
import apiCart from "../../components/API/apiCart";

export default function CartPage() {
  
  return (
    <>
      <Header cartItems={products.cartItems} />
      <CartList  />
    </>
  );
}
