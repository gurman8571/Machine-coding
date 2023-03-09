import { createSlice } from "@reduxjs/toolkit";

 const SuggestionSlice=createSlice({
    name:"Suggestion",
    initialState:{},
    reducers:{
addtocache:(state,action)=>{
    state=Object.assign(state,action.payload)
},

    }
}) 

export const {addtocache}=SuggestionSlice.actions;
export default SuggestionSlice.reducer;