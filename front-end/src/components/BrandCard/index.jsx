import React from "react";
import { Link } from "react-router-dom";
import "./style-prefix.scss";

export default function BrandCard({ image, name, amount }) {
  return (
    <div className="category">
      <div className="container-category">
        <div className="category-item-container has-scrollbar">
          <div className="category-item">
            <div className="category-img-box">
              <img src={image} alt="" className="logo-catogery" width={70} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">{name}</h3>
                <p className="category-item-amount">({amount})</p>
              </div>
              <Link to="#" className="category-btn">
                Show all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
