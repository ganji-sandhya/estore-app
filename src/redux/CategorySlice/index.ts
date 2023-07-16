import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { getCategories } from './actions';

interface categoryState  {
    categories: string[],
    status: string,
    error?: string

}
const initialState = {
    categories: [],
    status: "idle",
    error: ""

} as categoryState;
const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {

            state.status = 'Loading...';
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {

            state.status = 'success';
            state.categories = action.payload;
        });
        builder.addCase(getCategories.rejected, (state, action) => {

            state.status = 'Failed!'
            state.error = action.error.message;

        });
    }

});

export default CategorySlice;