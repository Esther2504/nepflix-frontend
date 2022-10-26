// export default (state = [], action) => {
//     console.log(action.coords);
//     switch (action.type) {
//         case 'OPEN_MODAL':
//             return 'OPEN_MODAL'
//         case 'CLOSE_MODAL':
//             return 'CLOSE_MODAL'
//         default:
//             return 'CLOSE_MODAL';
//     }
// };


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