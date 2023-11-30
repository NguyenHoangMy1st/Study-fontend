import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartCard from "../CartCard";
import "./style.scss";
import { toast } from "react-toastify";
import apiCart from "../../../API/(cart)/apiCart";
import apiRemoveCartItems from "../../../API/(cart)/apiRemoveCartItems";
import Button from "../../../components/Button";

export default function CartList() {
  // { onDelete = () => {} }
  const [products, setProducts] = useState([]);
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

  const handleDeleteProduct = async (productId) => {
    console.log("Deleting product with ID:", productId);
    try {
      const response = await apiRemoveCartItems.delRemoveCartItems(productId);
      console.log(response);
      if (response) {
        const updatedProducts = products.filter(
          (product) => product?.id !== productId
        );
        setProducts(updatedProducts);

        handleTotal();
        toast.succes("Xóa sản phẩm thành công");
      } else {
        console.error("Xóa sản phẩm thất bại");
      }
    } catch (error) {}
  };

  const handleTotal = useCallback(() => {
    // Tính tổng giá trị của sản phẩm trong giỏ hàng
    const total = products?.cartItems?.reduce((acc, product) => {
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
        <div className="cart-operation">
          <Link to="/product" className="cart-operation-link">
            <button className="cart-operation-add">Add New Products</button>
          </Link>

          <button
            className="cart-operation-delete"
            //  onClick={handleDelete}
          >
            Delete
          </button>
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
          <button className="payment-detail-btndelete">Delete</button>
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
