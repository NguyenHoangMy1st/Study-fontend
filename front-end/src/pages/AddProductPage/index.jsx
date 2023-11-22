import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import "./style.scss";
import Button from "../../components/Button";
import apiAddProduct from "../../components/API/apiAddProduct";

export default function AddProductPage() {
  const [nameProduct, setnameProduct] = useState("123123123");
  const [descriptionProduct, setdescriptionProduct] = useState(
    "Ở mỗi độ tuổi khác nhau, sẽ có những mẫu giày khác nhau cũng như cách chọn giày khác nhau. Để chọn được mẫu giày Puma theo từng độ tuổi nhất định, cần lựa chọn ..."
  );
  const [priceProduct, setpriceProduct] = useState("2000");
  const [discountedPriceProduct, setdiscountedPriceProduct] = useState("1800");
  const [discountPersentProduct, setdiscountPersentProduct] = useState("10");
  const [quantityProduct, setquantityProduct] = useState("100");
  const [imageProduct, setimageProduct] = useState(
    "https://raw.githubusercontent.com/DNAnh01/PBL6-shoes-shop/frontend/frontend/src/images/shoes7.png"
  );
  const [selectedBrand, setSelectedBrand] = useState("");
  // const [selectedSize, setSelectedSize] = useState([
  //   { name: "M", quantity: 20 },
  //   { name: "L", quantity: 30 },
  //   { name: "S", quantity: 50 },
  // ]);
  const arrSize = [
    { name: "M", quantity: 20 },
    { name: "L", quantity: 30 },
    { name: "S", quantity: 50 },
  ];
  const [selectedSize, setSelectedSize] = useState([]);
  console.log(selectedSize);

  const [selectedColor, setSelectedColor] = useState("");
  const navigate = useNavigate();

  // Thay đổi hàm xử lý sự kiện khi chọn size
  const handleSizeChange = (event, sizeName) => {
    if (event.target.checked) {
      // If the checkbox is checked, add the size to the selected sizes
      setSelectedSize((prevSelectedSize) => [
        ...prevSelectedSize,
        { name: sizeName },
      ]);
    } else {
      // If the checkbox is unchecked, remove the size from the selected sizes
      setSelectedSize((prevSelectedSize) =>
        prevSelectedSize.filter((size) => size.name !== sizeName)
      );
    }
  };

  const handleSubmit = async () => {
    const formData = {
      title: nameProduct,
      description: descriptionProduct,
      price: parseInt(priceProduct),
      discountedPrice: parseInt(discountedPriceProduct),
      discountPersent: parseInt(discountPersentProduct),
      quantity: parseInt(quantityProduct),
      imageUrl: imageProduct,
      brand: selectedBrand,
      size: selectedSize,
      color: selectedColor,
      topLavelCategory: "132",
      secondLavelCategory: "123",
      thirdLavelCategory: "123",
    };
    console.log(formData);
    // const axiosInstance = await axios.create({
    //   baseURL: "https://pbl6-shoes-shop-production-810a.up.railway.app/api",
    //   headers: {
    //     "Content-Type": "application/json",
    //     accept: "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDA2MzA2OTYsImV4cCI6MTcwMDcxNjY5NiwiZW1haWwiOiJraW5AZ21haWwuY29tIn0.aEL7QLW59W34FAclcuBnNCnb3CzG94YIrJqNpTIOqr0",
    //   },
    // });
    try {
      const response = await apiAddProduct.postAddProduct(formData);
      // const response = await axiosInstance.post("/admin/products/", formData);
      console.log("response:", response);
      if (response) {
        toast.success("Thêm sản phẩm mới thành công");
        setTimeout(() => {
          navigate("/warehouse");
        }, 2000);
      } else {
        toast.error("Có lỗi khi thêm sản phẩm");
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện yêu cầu API:", error);
      toast.error(`Có lỗi khi thực hiện yêu cầu API: ${error.message}`);
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="add-product container-layout">
          <ToastContainer />
          <div className="add-content">
            <h1 className="add-title">Đăng Bán Sản Phẩm</h1>
            <p className="add-title-clone">
              Hãy đăng những thông tin sản phẩm bạn cần bán
            </p>
          </div>
          <div className="add-name">
            <label className="add-label">Tên sản phẩm:</label>
            <input
              type="text"
              className="add-name-input"
              value={nameProduct}
              onChange={(event) => setnameProduct(event.target.value)}
            />
          </div>
          <div className="add-description">
            <label className="add-label">Mô tả sản phẩm:</label>
            <textarea
              className="add-description-text"
              rows="4"
              value={descriptionProduct}
              onChange={(event) => setdescriptionProduct(event.target.value)}
            ></textarea>
          </div>
          <div className="add-price">
            <label className="add-label">Giá:</label>
            <input
              type="number"
              className="add-price-input"
              value={priceProduct}
              onChange={(event) => setpriceProduct(event.target.value)}
            />
          </div>
          <div className="add-discountedPrice">
            <label className="add-label">Discounted Price:</label>
            <input
              type="number"
              className="add-discountedPrice-input"
              value={discountedPriceProduct}
              onChange={(event) =>
                setdiscountedPriceProduct(event.target.value)
              }
            />
          </div>
          <div className="add-discountPersent">
            <label className="add-label">Discount Persent:</label>
            <input
              type="number"
              className="add-discountPersent-input"
              value={discountPersentProduct}
              onChange={(event) =>
                setdiscountPersentProduct(event.target.value)
              }
            />
          </div>
          <div className="add-quantity">
            <label className="add-label">Quantity:</label>
            <input
              type="number"
              className="add-quantity-input"
              value={quantityProduct}
              onChange={(event) => setquantityProduct(event.target.value)}
            />
          </div>
          <div className="add-type">
            <div className="add-brand">
              <label className="add-label">Chọn nhãn hiệu:</label>
              <select
                id="add-brand-check"
                className="add-select"
                value={selectedBrand}
                onChange={(event) => setSelectedBrand(event.target.value)}
              >
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Converse">Converse</option>
                <option value="Puma">Puma</option>
                <option value="Alexander Mqueen">Alexander Mqueen</option>
                <option value="New Balence">New Balence</option>
                <option value="Reebok">Reebok</option>
              </select>
            </div>
            <div className="add-size">
              <label className="add-label">Chọn Size:</label>
              {arrSize.map((size) => (
                <div key={size.name} className="size-checkbox">
                  <input
                    type="checkbox"
                    value={size.name}
                    checked={selectedSize.some((s) => s.name === size.name)}
                    onChange={(event) => handleSizeChange(event, size.name)}
                  />
                  <label htmlFor={`size-${size.name}`}>{size.name}</label>
                </div>
              ))}
            </div>
            <div className="add-color">
              <label className="add-label">Chọn màu:</label>
              <select
                id="add-color-check"
                className="add-select"
                value={selectedColor}
                onChange={(event) => setSelectedColor(event.target.value)}
              >
                <option value="#FF0000">Đỏ</option>
                <option value="#00FF00">Xanh lá</option>
                <option value="#FFFF00">Vàng</option>
                <option value="#C0C0C0">Bạc</option>
                <option value="#00FFFF">Xanh Dương</option>
                <option value="#FFFFFF">Trắng</option>
                <option value="#000000">Đen</option>
                <option value="#808080">Xám</option>
              </select>
            </div>
          </div>
          <div className="add-image">
            <label className="add-label">Hình ảnh sản phẩm:</label>
            <input
              type="file"
              className="add-image-input"
              onChange={(event) => setimageProduct(event.target.files[0])}
            />
          </div>
          <div className="add-product-btn">
            <Button text="Đồng ý" onClick={handleSubmit}></Button>
          </div>
        </div>
      </section>
    </>
  );
}
