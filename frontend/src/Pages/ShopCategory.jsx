import React, { useContext } from "react";
import "../Scss/Pages/shop-category.scss";
import { ShopContext } from "../Context/ShopContext.jsx";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item.jsx";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-bunner" src={props.bunner} alt="bunner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 - 12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt="dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (item.category === props.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadMore">Explore more</div>
    </div>
  );
};
export default ShopCategory;
