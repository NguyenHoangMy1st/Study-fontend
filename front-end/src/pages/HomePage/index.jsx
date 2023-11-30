import Footer from "../../app/Layout/Footer";
import Header from "../../app/Layout/Header";
import TrendingItem from "../../components/TrendingItem";
import "./style.scss";
import ProductFeaturedCard from "../../components/ProductFeaturedCard";
import BrandList from "../../components/BrandList";
import ProductGridList from "../../components/ProductGridList";
import ProductBoxList from "../../components/ProductBoxList";
import { ToastContainer } from "react-toastify";

export default function HomePage() {
  return (
    <>
      <Header />
      <TrendingItem />
      <BrandList />
      <ProductBoxList />
      <ProductFeaturedCard />
      <ToastContainer />
      <ProductGridList />
      <Footer />
    </>
  );
}
