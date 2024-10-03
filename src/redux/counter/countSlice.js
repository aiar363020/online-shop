import { createSlice } from "@reduxjs/toolkit";

 const countSlice = createSlice({
    name:"counter",
    initialState:{
        value: 0
    },
    reducers: {
        addCout:(state) => {
            state.value +=2
        }
    }
})

export const {addCout} = countSlice.actions
export default countSlice.reducer