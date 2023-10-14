import { createSlice } from "@reduxjs/toolkit";
import coffeeMenu from "../coffee.json"

const storedData = localStorage.getItem('coffeeMenuItem')
const initialState = { coffeeData : storedData ? JSON.parse(storedData) : coffeeMenu , theitem : ''};

export const coffeeMenuSlice = createSlice({
    name : "coffeeMenu",
    initialState,
    reducers : {
        getCoffeeById : (state , action) => {
            const { id } = action.payload;
            const coffeeItem = coffeeMenu.coffeeMenu.find((c) => c.coffeeId === id);
            if(coffeeItem){
                state.theitem = coffeeItem;
            }
        },
        clearCoffee : (state) => {
            state.theitem = '';
        }
    }
})

export const { getCoffeeById, clearCoffee } = coffeeMenuSlice.actions;
export const selectAllCoffeeMenuItem = (state) => state.coffeeMenu.coffeeData.coffeeMenu;
export const selectedCoffeeById = (state) => state.coffeeMenu.theitem;
export default coffeeMenuSlice.reducer;