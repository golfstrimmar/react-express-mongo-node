import React from "react";
import "./Breadcramb.scss";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcramb = (props) => {
  const { product } = props;
  return (
    <div className="breadcramb">
      HOME
      <img src={arrow_icon} alt="icon" />
      SHOP
      <img src={arrow_icon} alt="icon" />
      {product.category}
      <img src={arrow_icon} alt="icon" />
      {product.name}
    </div>
  );
};
export default Breadcramb;
