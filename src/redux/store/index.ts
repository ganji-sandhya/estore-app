import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../CategorySlice";
import ProductSlice from "../ProductSlice";
import AccordionSlice from "../AccordionSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {category: CategorySlice.reducer, products: ProductSlice.reducer, accordion: AccordionSlice.reducer}
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types


export default store;