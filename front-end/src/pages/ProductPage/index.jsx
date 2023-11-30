import Header from "../../app/Layout/Header";
import BrandList from "../../components/BrandList";
import ProductGridList from "../../components/ProductGridList";

export default function ProductPage() {
  return (
    <>
      <Header />
      <div className="header-search-container container-layout">
        <input
          type="search"
          name="search"
          className="search-field"
          placeholder="Enter your product name..."
        />
        <button className="search-btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <BrandList />
      <ProductGridList />
    </>
  );
}
