import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  search: [],
  searchLoaded: false,
  searchError: '',
};

export const getSearch = createAsyncThunk("results/movie", async () => {
  const {
    data,
  } = await axios.get(`https://stoplight.io/mocks/tg-maxserve/netclone/102025768/browse`);
  const search = data;
  return search;
});

const SearchSlice = createSlice({
  name: "results",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.search = action.payload;
      state.searchLoaded = true;
      state.searchError = '';
  });
  }
})

export default SearchSlice.reducer;