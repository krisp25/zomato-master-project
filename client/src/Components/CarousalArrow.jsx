import React from "react";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

export const NextArrow = (props) => {
  return (
    <IoIosArrowDroprightCircle
      className={props.className}
      style={{ ...props.style, display: "block", width: "24", height: "24", color: "#e23744" }}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
  return (
    <IoIosArrowDropleftCircle
      className={props.className}
      style={{ ...props.style, display: "block", width: "24", height: "24", color: "#e23744" }}
      onClick={props.onClick}
    />
  );
};