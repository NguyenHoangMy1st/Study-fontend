// CartList.js
import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import CartCard from "../CartCard";
import apiRemoveCartItems from "../API/apiRemoveCartItems";
import { toast, ToastContainer } from "react-toastify";
import {
  setProducts,
  setTotalPrice,
  fetchCart,
} from "../../store/actions/cartActions";
import { message } from "antd";

import "./style.scss";

const CartList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.cart?.cartItems);
  const totalPrice = useSelector((state) => state?.cart.totalPrice);
  console.log(products);
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleIncreaseQuantity = (productId) => {
    // Dispatch action to update quantity in Redux store
    // Example: dispatch(increaseQuantity(productId));
  };

  const handleDeCreaseQuantity = (productId) => {
    // Dispatch action to update quantity in Redux store
    // Example: dispatch(decreaseQuantity(productId));
  };
  const handleDeleteProduct = async (productId) => {
    try {
      const response = await apiRemoveCartItems.delRemoveCartItems(productId);
      if (response) {
        const updatedProducts = products.filter(
          (product) => product?.id !== productId
        );
        dispatch(setProducts(updatedProducts));
        toast.success("Xóa sản phẩm thành công");
      } else {
        toast.error("Xóa sản phẩm thất bại");
      }
    } catch (error) {
      toast.error(message);
    }
  };

  const handleDeleteAllProducts = async () => {
    try {
      // Iterate through all cart items and delete them one by one
      for (const product of products.cartItems) {
        await apiRemoveCartItems.delRemoveCartItems(product.id);
      }

      // After all items are deleted, update the state
      dispatch(setProducts({ ...products, cartItems: [] }));

      toast.success("Xóa tất cả sản phẩm thành công");
    } catch (error) {
      toast.error("Có lỗi khi xóa tất cả sản phẩm");
    }
  };

  const handleTotal = useCallback(() => {
    // Use array destructuring to get the cartItems array directly
    const { cartItems } = products || { cartItems: [] };

    // Use reduce directly on the cartItems array
    const total = cartItems?.reduce((acc, product) => {
      return acc + product.priceSale * product.quantity;
    }, 0);

    // Cập nhật state với tổng giá trị mới
    dispatch(setTotalPrice(total));
  }, [dispatch, products]);

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
          products?.cartItems.map((product) => (
            <CartCard
              key={product?.id}
              product={product}
              onDelete={() => handleDeleteProduct(product.id)}
              onIncreaseQuantity={() => handleIncreaseQuantity(product.id)}
              onDeCreaseQuantity={() => handleDeCreaseQuantity(product.id)}
            />
          ))}
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
            <label>{totalPrice + " "}VND</label>
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
};

export default CartList;
