import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk('getCategoires', ()=>{

    const categories = ["Men", "Women", "Kids", "BestOffers", "All"];
    return categories;

})