import { useState, useEffect } from "react";

import Carousel from "react-bootstrap/Carousel";
import ProductMain from "./ProductMain";
const staticServerUri = process.env.REACT_APP_PATH || "";

function Main() {
  return (
    <>
      {/* 슬라이드 광고 */}
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={staticServerUri + "/carouselItem1.jpeg"}
            alt="carouselItem1.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={staticServerUri + "/carouselItem2.jpeg"}
            alt="carouselItem2.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={staticServerUri + "/carouselItem3.jpeg"}
            alt="carouselItem3.jpeg"
          />
        </Carousel.Item>
      </Carousel>

      {/* 판매 상품 */}
      <ProductMain />
    </>
  );
}

export default Main;
