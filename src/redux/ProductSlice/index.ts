import * as _ from 'lodash';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productType } from "../../Components/Products/ProductCard";
const initialState: productType[] =  [
    {
      id: _.uniqueId(),
      name: "Jacket",
      price: 45,
      img: "shop-1.jpg",
    },
    {
        id: _.uniqueId(),
      name: "Handbag",
      price: 35,
      img: "shop-2.jpg",
    },
    {
        id: _.uniqueId(),
      name: "Top",
      price: 55,
      img: "shop-3.jpg",
    },
    {
        id: _.uniqueId(),
      name: "Trouser",
      price: 95,
      img: "shop-4.jpg",
    },
    {
        id: _.uniqueId(),
      name: "Shoes",
      price: 30,
      img: "shop-5.jpg",
    },
    {
        id: _.uniqueId(),
      name: "Backpack",
      price: 20,
      img: "shop-6.jpg",
    },
    {
        id: _.uniqueId(),
      name: "Earrings",
      price: 12,
      img: "shop-7.jpg",
    },
    {
        id: _.uniqueId(),
      name: "Bowtie",
      price: 15,
      img: "shop-8.jpg",
    },
    {
        id: _.uniqueId(),
      name: "Boots",
      price: 29,
      img: "shop-9.jpg",
    },
  ];
const ProductSlice = createSlice({

    name: "Products",
    initialState,
    reducers: {
        addProduct(state: productType[], actions: PayloadAction<{product: productType}>) {

        },
        deleteProduct(state: productType[], actions: PayloadAction<{productId: string}>) {

        },
        updateProduct(state: productType[], actions: PayloadAction<{product: productType}>) {

        }
    }
});

export default ProductSlice;