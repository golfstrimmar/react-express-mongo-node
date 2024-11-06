import React from "react";
import "./DescriptionBox.scss";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-nav">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviewes(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
          autem consequatur corporis cum eaque id laborum molestiae molestias
          nemo, nesciunt, nulla, odio odit officiis perferendis ratione
          reprehenderit sint sunt.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};
export default DescriptionBox;
