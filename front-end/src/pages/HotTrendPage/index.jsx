import Header from "../../app/Layout/Header";
import ProductBoxList from "../../components/ProductBoxList";
import ProductFeaturedCard from "../../components/ProductFeaturedCard";

export default function HotTrendPage() {
  return (
    <>
      <Header />
      <ProductFeaturedCard />
      <ProductBoxList />
    </>
  );
}
