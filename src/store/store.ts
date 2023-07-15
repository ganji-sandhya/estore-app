import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slice/categorySlice";
import ProductSlice from "./slice/productSlice";
import AccordionSlice from "./slice/accordionSlice";

const store = configureStore({
    reducer: {category: CategorySlice.reducer, products: ProductSlice.reducer, accordion: AccordionSlice.reducer}
});


export type RootState = ReturnType<typeof store.getState>;

export default store;