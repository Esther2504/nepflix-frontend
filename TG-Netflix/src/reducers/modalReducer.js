import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  modalState: false,
};

//get data for direct link
export const getMovieID = async (id) => {
  //fetches /movie data
  const { data } = await axios.get(
    `https://tg-nepflix.azurewebsites.net/movie/${id}?similar=true`
  );
  const movie = data;

  return movie;
};

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

  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
