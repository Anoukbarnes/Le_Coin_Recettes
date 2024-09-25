import { configureStore } from "@reduxjs/toolkit";
import abonneReducer from "./abonnesSlice"

const store = configureStore({
    reducer: {
        abonnes: abonneReducer
    }
})

export default store