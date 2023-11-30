"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import apiProductDetail from "../API/apiProductDetail";
import "./style.scss";
import { toast } from "react-toastify";
import apiReviewDetail from "../API/apiReviewDetail";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";

export default function CommentedShow() {
  const image =
    "https://png.pngtree.com/element_our/20200611/ourlarge/pngtree-doggie-cute-cheap-expression-pack-avatar-image_2251655.jpg";

  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Thêm isLoading vào đây
  let id = useParams();
  useEffect(() => {
    const fetchproductDetail = async () => {
      try {
        const response = await apiProductDetail.getProductDetail(id?.id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    fetchproductDetail();
  }, []);

  useEffect(() => {
    const fetchReviewDetail = async () => {
      try {
        setIsLoading(true); // Bắt đầu loading
        const response2 = await apiReviewDetail.getReviewDetail(id);

        setReviews(response2?.data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
        toast.error("Error fetching product detail");
      } finally {
        setIsLoading(false); // Kết thúc loading, không phụ thuộc vào thành công hay thất bại
      }
    };

    fetchReviewDetail();
  }, [id]);

  return (
    <div>
      <div className="px-[20px] font container-layout">
        <div className="reviews-heading mb-[10px]">
          <h3 className="label-comment">
            Reviews for
            <span className="font-semibold"> {product?.title}</span>
          </h3>
        </div>
        <Swiper
          //   modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          // navigation
          grabCursor={"true"}
          pagination={{ clickable: true }}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="pb-[40px]"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#f8f8f8] review-card p-[10px] rounded-lg">
                <div className="card-top">
                  <div className="comment-profile">
                    <div className="comment-profile-image">
                      <img src={image} alt="123" width={100} height={100} />
                    </div>
                    <div className="comment-profile-name">
                      <strong>My Nguyen Hoang</strong>
                      <div className="likes">
                        <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
                        <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
                        <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
                        <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
                        <i className="fa fa-solid fa-star fa-2xl icon-star"></i>
                      </div>
                    </div>
                    <div className="comment-date">
                      <span>October 6, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="card-main">
                  <p>{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
