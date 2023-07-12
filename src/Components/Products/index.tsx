import { FC } from "react";

import ProductCard, {productType} from "./ProductCard";

const Products: FC = () => {

  const productData: productType[] = [
    {
      name: "Jacket",
      price: 45,
      img: "shop-1.jpg",
    },
    {
      name: "Handbag",
      price: 35,
      img: "shop-2.jpg",
    },
    {
      name: "Top",
      price: 55,
      img: "shop-3.jpg",
    },
    {
      name: "Trouser",
      price: 95,
      img: "shop-4.jpg",
    },
    {
      name: "Shoes",
      price: 30,
      img: "shop-5.jpg",
    },
    {
      name: "Backpack",
      price: 20,
      img: "shop-6.jpg",
    },
    {
      name: "Earrings",
      price: 12,
      img: "shop-7.jpg",
    },
    {
      name: "Bowtie",
      price: 15,
      img: "shop-8.jpg",
    },
    {
      name: "Boots",
      price: 29,
      img: "shop-9.jpg",
    },
  ];

  return (
  <div className="products-container p-2">
  {productData.map(({name, price, img}, index)=> <ProductCard key={index} name={name} price={price} img={img} />)}
    
  </div>
     );
};

export default Products;
