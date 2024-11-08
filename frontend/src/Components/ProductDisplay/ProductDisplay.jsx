import "./ProductDisplay.scss";
import React, { useContext } from "react";
import star from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext.jsx";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-img-list">
          <img src={product.image} alt="product.image" />
          <img src={product.image} alt="product.image" />
          <img src={product.image} alt="product.image" />
          <img src={product.image} alt="product.image" />
        </div>
        <div className="ProductDisplay-img ">
          <div className="imgs">
            <img
              src={product.image}
              alt="product.image"
              className="ProductDisplay-img"
            />
          </div>
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay-right-star">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>122</p>
        </div>
        <div className="ProductDisplay-price">
          <p className="ProductDisplay-old-price">
            <strong> Old price:</strong> $ {product.old_price}
          </p>
          <p className="ProductDisplay-new-price">
            <strong> New price:</strong> $ {product.new_price}
          </p>
        </div>

        <div className="ProductDisplay-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            unde?
          </p>
        </div>
        <div className="ProductDisplay-size">
          <h2>Select size</h2>
          <div className="ProductDisplay-size-list">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
          </div>
          <div className="ProductDisplay-category">
            <span>Category: </span>
            Women, T-shirts, Crop-top
          </div>
          <div className="ProductDisplay-category">
            <span>Tags:</span>
            Modern, Latest
          </div>
        </div>
        <button
          className="_btn"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductDisplay;
