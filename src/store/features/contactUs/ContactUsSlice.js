import { createSlice, nanoid } from "@reduxjs/toolkit";

const request = [
    { userId: '1', name: 'tobi', email: 'tobi@gmail.com', subject: 'request regarding black coffee', content: 'the things i would like to report .......' },
    { userId: '2', name: 'toni', email: 'tobi@gmail.com', subject: 'request regarding black coffee', content: 'the things i would like to report .......' },
]

const storedData = localStorage.getItem('contactUsRequest')
const initialState = storedData ? JSON.parse(storedData) : request;

export const ContactUsSlice = createSlice({
    name: "contactus",
    initialState,
    reducers: {
        addRequest : {
            reducer (state , action ){
                state.push(action.payload);
                localStorage.setItem('contactUsRequest', JSON.stringify(state))
            },
            prepare(name, email, subject, content){
                return {
                    payload : {
                        userId : nanoid(),
                        name,
                        email, 
                        subject, 
                        content
                    }
                }
            }
        },
        clearContactUs : {
            reducer(){
                localStorage.clear();
            }
        }
    }
})


export const SelectAllContactUsRequest = (state) => state.contactus;
export const {addRequest, clearContactUs} =  ContactUsSlice.actions;
export default ContactUsSlice.reducer;