import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Header from "../../components/Layout/Header";
import ProfileCard from "../../components/ProfileCard";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { cartItems } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header cartItems={cartItems} />
      {isAuthenticated && <ProfileCard />}
      <ToastContainer />
    </>
  );
}
