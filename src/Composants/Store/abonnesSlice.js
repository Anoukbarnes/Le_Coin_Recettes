import { createSlice } from "@reduxjs/toolkit";

const abonnesSlice = createSlice({
    name: "abonnes",
    initialState: {
        informationsAbonne: [] 
    },
    reducers: {
        ajouterAbonne: (state, action) => {
            state.informationsAbonne.push(action.payload);
        }, 
        supprimerAbonne: (state, action) => {
            state.informationsAbonne.splice(action.payload, 1);
        },
    }
});

export const {afficherAbonne, ajouterAbonne, supprimerAbonne,} = abonnesSlice.actions;

export default abonnesSlice.reducer;