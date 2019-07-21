import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../assets/images/arrow.svg";

const PrevArrowDv = styled.div`
  display: block;
  img {
    transform: rotate(180deg);
  }
  &.slick-disabled {
    display: none !important;
  }
`;
const NextArrowDv = styled.div`
  display: block;
  &.slick-disabled {
    display: none !important;
  }
`;
export const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <NextArrowDv
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={Arrow} alt="" />
    </NextArrowDv>
  );
};
export const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <PrevArrowDv className={className} style={{ ...style }} onClick={onClick}>
      <img src={Arrow} alt="" />
    </PrevArrowDv>
  );
};