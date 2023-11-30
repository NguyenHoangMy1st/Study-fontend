import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProductPage from "./app/(admin)/AddProductPage";
import RegisterPage from "./app/(auth)/RegisterPage";
import LoginPage from "./app/(auth)/LoginPage";
import AboutPage from "./components/AboutPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import HotTrendPage from "./pages/HotTrendPage";
import PayPage from "./pages/PayPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import ServicePage from "./pages/ServicePage";
import UpdateProductPage from "./pages/UpdateProductPage";
import WarehousePage from "./pages/WarehousePage";
import ForgetPassPage from "./app/(auth)/ForgerPassPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetpassword" element={<ForgetPassPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<AboutPage />} />
        <Route path="/hot" element={<HotTrendPage />} />
        <Route path="/warehouse" element={<WarehousePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/pay" element={<PayPage />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/updateproduct" element={<UpdateProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
