import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header";
import CartList from "../../components/CartList";
import apiCart from "../../components/API/apiCart";

export default function CartPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await apiCart.getAllCart();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };

    fetchCartProducts();
  }, []);

  return (
    <>
      <Header products={products} />
      <CartList products={products} />
    </>
  );
}
