import React from "react";
import Header from "../../components/Layout/Header";
import PayCard from "../../components/PayCard";

export default function PayPage() {
  const { cartItems } = useCart();
  return (
    <>
    <Header cartItems={cartItems} />
      <PayCard />
    </>
  );
}
