import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassPage from "./pages/ForgerPassPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import WarehousePage from "./pages/WarehousePage";
import CartPage from "./pages/CartPage";
import ServicePage from "./pages/ServicePage";
import PayPage from "./pages/PayPage";
import AddProductPage from "./pages/AddProductPage";
import ProfilePage from "./pages/ProfilePage";
import HotTrendPage from "./pages/HotTrendPage";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./contexts/CartContext";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgetpassword" element={<ForgetPassPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<AboutPage />} />
          <Route path="/hot" element={<HotTrendPage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route
            path="/cart"
            element={isAuthenticated ? <CartPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/service"
            element={
              isAuthenticated ? <ServicePage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/pay"
            element={isAuthenticated ? <PayPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/addproduct"
            element={
              isAuthenticated ? <AddProductPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
