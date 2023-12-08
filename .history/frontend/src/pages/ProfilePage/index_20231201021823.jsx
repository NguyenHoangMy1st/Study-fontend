import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "../../components/Layout/Header";
import ProfileCard from "../../components/ProfileCard";
import { useCart } from "../../contexts/CartContext";

export default function ProfilePage() {
  const { cartItems } = useCart();
  return (
    <>
      <Header cartItems={cartItems} />
      <ProfileCard />
      <ToastContainer />
    </>
  );
}
// ProfilePage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import ProfileCard from "../components/ProfileCard";

export default function ProfilePage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Bạn cần đăng nhập để xem trang Profile.");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {isAuthenticated && <ProfileCard />}
      {/* Hiển thị ProfileCard chỉ khi người dùng đã đăng nhập */}
    </div>
  );
}
