import { FC } from "react";

import { RootState } from "../../redux/store";

import ProductCard, { productType } from "./ProductCard";
import { useSelector } from "react-redux";

const Products: FC = () => {
  const productData: productType[] = useSelector(
    (state: RootState) => state.products
  );
  return (
    <div className="products-container p-2">
      {productData.map(({ name, price, img, id }, index) => (
        <ProductCard key={id} name={name} price={price} img={img} />
      ))}
    </div>
  );
};

export default Products;
