import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';



const initialState = {
  search: [],
  searchLoaded: false,
  searchError: '',
};

export const getSearch = createAsyncThunk("results/movie", async () => {
  const [search1] = useSearchParams();
  const searchQuery = search1.get('query');

  //fetches /Browse data
  const {
    data,
  } = await axios.get(`https://tg-nepflix.azurewebsites.net/search/movie?query=avengers`);
  const search = data;
  console.log(search)
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