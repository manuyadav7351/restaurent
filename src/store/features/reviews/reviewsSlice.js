import { createSlice } from "@reduxjs/toolkit";

const defaultData = [
    {userId : '1', name : 'tony', email : 'tony@gmail.com', content : 'this is tonys review'},
    {userId : '2', name : 'toy', email : 'toy@gmail.com', content : 'this is toys review'}
]

const storedData = localStorage.getItem('reviews')
const initialState = storedData ? JSON.parse(storedData) : defaultData;

export const reviewSlice = createSlice({
    name : 'reviews',
    initialState,
    reducers : {
        reviewAdded : {
            reducer(state, action){
                state.push(action.payload);
                localStorage.setItem('reviews', JSON.stringify(state))
            },
            prepare(name , email, content){
                return {
                    payload: {
                        name , 
                        email,
                        content
                    }
                }
            }
        },
        clearReview : {
            reducer(){
                localStorage.clear();
            }
        }
    }
})

export const selectAllReviews  = (state) => state.reviews;
export const { reviewAdded, clearReview } = reviewSlice.actions;
export default reviewSlice.reducer;