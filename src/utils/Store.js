import { configureStore } from "@reduxjs/toolkit";
import SuggestionSlice from "./SuggestionSlice";
import Chatslice from './Chatslice'
const store= configureStore({
    reducer:{
        Suggestion:SuggestionSlice,
        Chat:Chatslice,
    }
})
export default store;