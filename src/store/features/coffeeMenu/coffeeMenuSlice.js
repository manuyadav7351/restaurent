import { createSlice } from "@reduxjs/toolkit";
import coffeeMenu from "../coffee.json"

const storedData = localStorage.getItem('coffeeMenuItem')
const initialState = storedData ? JSON.parse(storedData) : coffeeMenu;

export const coffeeMenuSlice = createSlice({
    name : "coffeeMenu",
    initialState,
    reducers : {

    }
})

export const selectAllCoffeeMenuItem = (state) => state.coffeeMenu.coffeeMenu;
export default coffeeMenuSlice.reducer;