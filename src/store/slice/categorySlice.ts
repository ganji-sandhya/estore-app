import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState = ["Men", "Women", "Kids", "BestOffers", "All"];
const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory(state:string[], actions: PayloadAction<{item: string}>) {
            state.push(actions.payload.item);
        },
        removeCategory(state:string[], actions: PayloadAction<{item: string}>) {
           state.splice(state.findIndex((category:string) => category === actions.payload.item), 1);
        }
    }

});

export default CategorySlice;