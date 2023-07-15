import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        category: "Men",
        items: ["Coats", "Jackets", "Party Wear", "Shirts"]
    },
    {
        category: "Women",
        items: ["Coats", "Jackets", "Party Wear", "Shirts"]
    },
    {
        category: "Kids",
        items: ["Coats", "Jackets", "Party Wear", "Shirts"]
    }
]

const AccordionSlice = createSlice({
    name:"accordion",
    initialState,
    reducers: {
        addCategory(state: {category: string, items: string[]}[], actions: PayloadAction<{category: string, items: string[]}>){

        }
    }
});

export default AccordionSlice;