import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../app/Layout/Header";
import { red } from "@mui/material/colors";
import Button from "../../components/Button";
import apiProductDetail from "../../API/(product)/apiProductDetail";

export default function UpdateProductPage() {
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState([]);
  console.log(productDetail);
  const [isLoading, setIsLoading] = useState(true); // Thêm isLoading vào đây
  const { id } = useParams();
  const [arrSize, setArrSize] = useState([
    { name: "M", quantity: null },
    { name: "L", quantity: null },
    { name: "S", quantity: null },
  ]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const handleQuantityChange = (event, sizeName) => {
    const value = event.target.value;
    console.log(value);
    setArrSize((prevArrSize) =>
      prevArrSize.map((item) =>
        item.name === sizeName
          ? { ...item, quantity: value === "" ? null : parseInt(value, 10) }
          : item
      )
    );
  };
  const handleSizeChange = (event, sizeName, quantitySize) => {
    if (event.target.checked) {
      setArrSize((prevArrSize) =>
        prevArrSize.map((item) =>
          item.name === sizeName ? { ...item, quantity: quantitySize } : item
        )
      );
    } else {
      setArrSize((prevArrSize) =>
        prevArrSize.map((item) =>
          item.name === sizeName ? { ...item, quantity: null } : item
        )
      );
    }

    setSelectedSizes((prevSelectedSizes) =>
      event.target.checked
        ? [...prevSelectedSizes, { name: sizeName, quantity: quantitySize }]
        : prevSelectedSizes.filter((size) => size.name !== sizeName)
    );
  };
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setIsLoading(true); // Bắt đầu loading

        const response = await apiProductDetail.getProductDetail(id);
        setProductDetail(response.data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
        toast.error("Error fetching product detail");
      } finally {
        setIsLoading(false); // Kết thúc loading, không phụ thuộc vào thành công hay thất bại
      }
    };

    fetchProductDetail();
  }, [id]);
  return (
    <>
      <Header />
      <section>
        <div className="add-product container-layout">
          <ToastContainer />
          <div className="add-content">
            <h1 className="add-title">Cập nhật sản phẩm</h1>
          </div>
          <div className="add-name">
            <label className="add-label">Tên sản phẩm:</label>
            <input type="text" className="add-name-input" />
          </div>
          <div className="add-description">
            <label className="add-label">Mô tả sản phẩm:</label>
            <textarea className="add-description-text" rows="4"></textarea>
          </div>
          <div className="add-price">
            <label className="add-label">Giá:</label>
            <input type="number" className="add-price-input" />
          </div>
          <div className="add-discountedPrice">
            <label className="add-label">Discounted Price:</label>
            <input type="number" className="add-discountedPrice-input" />
          </div>
          <div className="add-discountPersent">
            <label className="add-label">Discount Persent:</label>
            <input type="number" className="add-discountPersent-input" />
          </div>
          <div className="add-type">
            <div className="add-brand">
              <label className="add-label">Chọn nhãn hiệu:</label>
              <select id="add-brand-check" className="add-select">
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
              <label className="add-label">Chọn Size và Số lượng:</label>
              {arrSize.map((size) => (
                <div key={size.name} className="add-size-checkbox">
                  <div className="add-size-name">
                    <input
                      type="checkbox"
                      id={`checkbox-${size.name}`}
                      checked={selectedSizes.some(
                        (selectedSize) => selectedSize.name === size.name
                      )}
                      onChange={(event) => handleSizeChange(event, size.name)}
                      style={{
                        transform: "scale(1.2)",
                        cursor: "pointer",
                        backgroundColor: selectedSizes.some(
                          (selectedSize) => selectedSize.name === size.name
                        )
                          ? "pink"
                          : "initial",
                      }}
                    />
                    <label
                      style={{ fontSize: "20px", cursor: "pointer" }}
                      htmlFor={`checkbox-${size.name}`}
                    >
                      {size.name}
                    </label>
                  </div>
                  <input
                    type="number"
                    className="add-size-input"
                    id={`size-${size.name}`}
                    value={size.quantity || ""}
                    onChange={(event) => handleQuantityChange(event, size.name)}
                  />
                </div>
              ))}
            </div>
            <div className="add-color">
              <label className="add-label">Chọn màu:</label>
              <select id="add-color-check" className="add-select">
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
            <input type="file" className="add-image-input" />
          </div>
          <div className="add-product-btn">
            <Button
              text="Đồng ý"
              //  onClick={handleSubmit}
            ></Button>
          </div>
        </div>
      </section>
    </>
  );
}
