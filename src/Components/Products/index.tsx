import { FC } from "react";
<<<<<<< HEAD
import { RootState } from "../../redux/store";
=======
import { RootState } from "../../store/store";
>>>>>>> 9054437b3d9c7c26bbed51806ca2dc251bc4c0b9
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
