import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import CartCard from "../CartCard";
import shoes from "../../images/shoes4.png";
import "./style.scss";
import apiCart from "../API/apiCart";
import { toast, ToastContainer } from "react-toastify";
import apiRemoveCartItems from "../API/apiRemoveCartItems";
import { message } from "antd";

export default function CartList() {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(products);

  // API cart
  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await apiCart.getAllCart();
        setProducts(response.data);
      } catch (error) {
        toast.error(error?.message);
      }
    };

    // Gọi hàm fetchCarts
    fetchCarts();
  }, []);

  const handleIncreaseQuantity = (productId) => {
    // Tìm sản phẩm cần tăng số lượng
    // console.log(products);
    const updatedProducts = products?.product?.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    // Cập nhật danh sách sản phẩm
    setProducts(updatedProducts);
  };

  const handleDeCreaseQuantity = (productId) => {
    // Tìm sản phẩm cần giảm số lượng
    const updatedProducts = products.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );

    // Cập nhật danh sách sản phẩm
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    try {
      const response = apiRemoveCartItems.delRemoveCartItems(productId);
      if (response) {
        const updatedProducts = products.filter(
          (product) => product?.id !== productId
        );
        setProducts(updatedProducts);
        toast.success("Xóa sản phẩm thành công");
      } else {
        toast.error("Xóa sản phẩm thất bại");
      }
    } catch (error) {
      toast.error(message);
    }
    // window.location.reload();
  };

  const handleDeleteAllProducts = async () => {
    try {
      // Iterate through all cart items and delete them one by one
      for (const product of products.cartItems) {
        await apiRemoveCartItems.delRemoveCartItems(product.id);
      }

      // After all items are deleted, update the state
      setProducts({ ...products, cartItems: [] });

      toast.success("Xóa tất cả sản phẩm thành công");
    } catch (error) {
      toast.error("Có lỗi khi xóa tất cả sản phẩm");
    }
    window.location.reload();
  };
  const handleTotal = useCallback(() => {
    // Use array destructuring to get the cartItems array directly
    const { cartItems } = products || { cartItems: [] };

    // Use reduce directly on the cartItems array
    const total = cartItems?.reduce((acc, product) => {
      return acc + product.priceSale * product.quantity;
    }, 0);

    // Cập nhật state với tổng giá trị mới
    setTotalPrice(total);
  }, [products]);

  useEffect(() => {
    // Gọi hàm handleTotal mỗi khi danh sách sản phẩm thay đổi
    handleTotal();
  }, [handleTotal, products]);
  return (
    <>
      <div className="cart container-layout">
        <ToastContainer />
        <div className="cart-operation">
          <Link to="/product" className="cart-operation-link">
            <button className="cart-operation-add">Add New Products</button>
          </Link>
        </div>
        <div className="cartRow">
          <div className="cartRow-product font-15">Product</div>
          <div className="cartRow-price font-15">Unit price</div>
          <div className="cartRow-priceSale font-15">Sale price</div>
          <div className="cartRow-quantity font-15">Quantity</div>
          <div className="cartRow-money font-15">Total</div>
          <div className="cartRow-operation font-15">Operation</div>
        </div>

        {/* Danh sách sản phẩm  */}
        {products?.cartItems?.length > 0 &&
          products?.cartItems.map((product) => {
            return (
              <CartCard
                key={product?.id}
                product={product}
                onDelete={() => handleDeleteProduct(product.id)}
                onIncreaseQuantity={() => handleIncreaseQuantity(product.id)}
                onDeCreaseQuantity={() => handleDeCreaseQuantity(product.id)}
              />
            );
          })}
      </div>
      <div className="payment">
        <div className="payment-voucher">
          <i className="fa fa-ticket" aria-hidden="true" />
          <span>Your voucher</span>
          <button className="btn-payment-voucher">
            Select or enter Voucher code
          </button>
        </div>
        <div className="payment-detail">
          <button className="payment-detail-btnall">Select all</button>
          <button
            className="payment-detail-btndelete"
            onClick={handleDeleteAllProducts}
          >
            Delete
          </button>
          <div className="payment-content">
            <label>The Total Amount</label>
            <label>{products?.totalDiscountedPrice + " "}VND</label>
          </div>
        </div>
        <div className="payment-btn">
          <Button
            text="Buy Now"
            to="/pay?step=1"
            className={"payment-btn-buy"}
          ></Button>
        </div>
      </div>
    </>
  );
}
