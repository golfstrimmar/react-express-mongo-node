import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcramb from "../Components/Breadcramb/Breadcramb";
import { ShopContext } from "../Context/ShopContext.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.jsx";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts.jsx";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find(
    (product) => product.id === Number(productId),
  );
  return (
    <div>
      <Breadcramb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};
export default Product;
