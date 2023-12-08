import chroma from "chroma-js";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
export default function CartCard({
  product,
  // onIncreaseQuantity,
  // onDeCreaseQuantity,
  onDelete,
}) {
  const [quantityDefault, setQuantityDefault] = useState(product?.quantity);
  const [quantityNew, setQuantityNew] = useState(quantityDefault);
  // console.log(quantityNew);
  // console.log(quantityDefault);
  const hexColorCode = product?.product.color;
  const colorName = chroma(hexColorCode).name();
  // console.log(product);
  // useEffect(() => {
  //   onIncreaseQuantity(price, quantity);
  // }, []);

  const handleDecreaseQuantity = () => {
    if (quantityDefault > 1) {
      const newQuantity = quantityDefault - 1;
      setQuantityDefault(newQuantity);
      setQuantityNew(newQuantity);
    }
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantityDefault + 1;
    setQuantityDefault(newQuantity);
    setQuantityNew(newQuantity);
  };
  const handleDelete = () => {
    onDelete();
  };
  const handleUpdate = () => {
    // Use quantityNew here for the updated value
    console.log("Updated Quantity:", quantityNew);
  };
  return (
    <>
      <div className="cartList" role="list">
        <div className="cartList-detail ">
          <Link
            to={`/product/${product?.product.id}`}
            className="cartList-detail-link"
          >
            <img
              src={product?.product.imageUrl}
              alt=""
              className="cartList-detail-img"
            />
          </Link>
          <div className="cartList-content">
            <Link
              to={`/product/${product?.product.id}`}
              className="cartList-content-link"
            >
              <span className="cartList-content-span">
                {product?.product.title}
              </span>
            </Link>
            <Link
              to={`/product?brand=${product?.product?.brand?.name}`}
              className="cartList-content-catogery"
            >
              {product?.product?.brand?.name}
            </Link>
            <div className="cartList-content-color">
              <span className="cartList-content-color-p">
                Color: {colorName} Size: {product?.size}
              </span>
            </div>
          </div>
        </div>
        <div className="cartList-price">
          <span className="font-15">{product?.discountedPrice + " "}VND</span>
        </div>
        <div className="cartList-priceSale">
          <span className="font-15">{product?.price + " "}VND</span>
        </div>
        <div className="cartList-quantity">
          <button
            className="cartList-decrease"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <input
            type="number"
            className="cartList-input"
            value={quantityDefault}
          />
          <button
            className="cartList-increase"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <div className="cartList-money">
          <span className="font-15">
            {quantityDefault * Number(product.discountedPrice) + " "}VND
          </span>
        </div>
        <div className="cartList-operation">
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </>
  );
}
