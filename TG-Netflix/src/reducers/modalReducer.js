import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    modalState: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,

    reducers: {
        openModal(state, action) {
            state.modalState = action.payload;
            
        },
        closeModal(state, action) {
            state.modalState = action.payload;
            state.coords = [];

        },
    }
})


export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;