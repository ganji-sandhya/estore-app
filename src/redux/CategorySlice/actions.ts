import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk('getCategoires', async ()=>{

    const response = await fetch("http://localhost:5001/categories");

    const categories  = await response.json();
    return categories;

})