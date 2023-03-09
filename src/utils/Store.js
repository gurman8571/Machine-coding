import { configureStore } from "@reduxjs/toolkit";
import SuggestionSlice from "./SuggestionSlice";
const store= configureStore({
    reducer:{
        Suggestion:SuggestionSlice,
    }
})
export default store;