import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./features/reviews/reviewsSlice"
import registerReducer  from "./features/register/registerSlice"
import ContactUsReducer from "./features/contactUs/ContactUsSlice";


export const store = configureStore({
    reducer : {
        reviews : reviewsReducer,
        register : registerReducer,
        contactus : ContactUsReducer,
    }
})

