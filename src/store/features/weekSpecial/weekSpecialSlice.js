import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const defaultWeekSpecial = [
    {   
        "weekSpecialId" : '1',
        "name": "Espresso",
        "price": 3.99,
        "imageUrl": "https://images.pexels.com/photos/33595/cappuccino-cup-drink-coffee-drink.jpg?cs=srgb&dl=caffeine-coffee-cup-33595.jpg&fm=jpg",
        "isSpecial": true
      },
      {
        "weekSpecialId" : '2',
        "name": "Cappuccino",
        "price": 4.49,
        "imageUrl": "https://www.thespruceeats.com/thmb/OFnU2uJP3iosZA1oe7qvcdOlY0M=/3863x2578/filters:fill(auto,1)/cappuccino-with-cocoa-powder-in-a-coffee-shop-696828002-5a8cdd4030371300379a59fd.jpg",
        "isSpecial": true
      },
      {
        "weekSpecialId" : '3',
        "name": "Latte",
        "price": 3.79,
        "imageUrl": "https://cdn.trendhunterstatic.com/thumbs/flavored-latte.jpeg",
        "isSpecial": true
      },
] 

const storedData = localStorage.getItem('weekSpecialMenu')
const initialState = storedData ? JSON.parse(storedData) : defaultWeekSpecial;

export const weekSpecialSlice = createSlice({
    name : "weekSpecialMenu",
    initialState,
    reducers : {
        addWeekSpecial : {
            reducer(state, action){
                state.push(action.payload)
                localStorage.setItem('weekSpecialMenu' , JSON.stringify(state))
            },
            prepare(name , price , imageUrl, isSpecial){
                return{
                    payload : {
                        weekSpecialId : nanoid(),
                        name,
                        price, 
                        imageUrl, 
                        isSpecial
                    }
                }
            }
        }
    }
})

export const selectAllWeekSpecial = (state) => state.weekSpecial;
export const {addWeekSpecial} = weekSpecialSlice.actions;
export default weekSpecialSlice.reducer;