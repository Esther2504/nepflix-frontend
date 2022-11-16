import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//When calling on data from browse and movies, useSelector should be used on the page it's being called;
//const browse = useSelector(state => state.browse;
//const movie = useSelector(state => state.movie;
//Map each in there respective locations. Remove props passed in components

const initialState = {
    browse: [],
    browseLoaded: false,
    browseError: "",

    movies: [],
    moviesLoaded: false,
    moviesError: "",
};

//The two axios links can be replaced with the link recieved from the back-end IF the initial endpoints stay as is.
export const getBrowse = createAsyncThunk("netflix/browse", async ({ banner, categories, page }) => {
    // console.log(banner, categories, page)
    //fetches /Browse data
    const { data } = await axios.get(
        `https://tg-nepflix.azurewebsites.net/browse`, { params: { banner, categories, page } }
    );
    const browse = data;
// console.log(browse)
    return browse;
});

export const getMovies = createAsyncThunk("netflix/movies", async (id) => {
    //fetches /movie data
    const {
        data,
    } = await axios.get(`https://tg-nepflix.azurewebsites.net/movie/${id}?similar=true`);
    const movie = data;

    return movie;
});


const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,

  //make reducers to set browse and movie states
  extraReducers: (builder) => {
    //this is when the  /browse data has been fully fetched
    builder.addCase(getBrowse.fulfilled, (state, action) => {
      const categorypayload = action.payload.categories;
      const bannerpayload = action.payload.banner;

      if (state.browse == [] || state.browse.length == 0) {
        state.browse = [categorypayload, bannerpayload];
      } else {
        for (let i = 0; i < categorypayload.length; i++) {

          // Check if page 2 is fetched
          const pageTwoFetched = categorypayload[i].page == 2
          
          console.log(categorypayload[i])
          console.log("Page 2 fetched?:", pageTwoFetched)

          // Check if a category is already in state
          const found = state.browse[0].some(
            (element) => element == categorypayload[i]
          );

          console.log("found?:", found)

          if (pageTwoFetched) {
            // Check if page 2 is already in state
            const pageTwoFound = state.browse[0].find(
              (element) => element.name == categorypayload[i].name
            ).page - 1;   // remove -1 when combining works
            console.log(pageTwoFound)
            if (!pageTwoFound) {

            }
            // Combine the movie arrays from page 1 and page 2
            console.log("payload", categorypayload[i])
            // if (pageTwoFound) {
            //   console.log(categoryPayload[i])
            // }
          }

          // if a category is not already in state, add it
          if (!found) {
            state.browse[0].push(categorypayload[i])
          }

        }
      }

      // loop through payload.categories
      // check for each: does it exist in state.browse
      // if it doesn't: append to state.browse
      // if it does: check if Number(category.page) > Number(same category in state.page)
      // if it is: append category.movies to existing one in state.
      // if it is: also update number
      // if it isn't: replace category in state with current payload category.
      // state.browse = action.payload;
      // console.log(state.browse.categories)
      state.browseLoaded = true;
      state.browseError = "";
    });
    //   .addCase(getBrowse.error(), (state, action) => {
    //     state.browse = "";
    //     state.browseLoaded = true;
    //     state.browseError = error;
    //   });
    //can do .addCase to set other status to the same builder, such ass; Pending and Error
    //this is when the /movie has been fully fetched
    builder.addCase(getMovies.fulfilled, (state, action) => {
            const checkIfMovieInState = state.movies.find((movie)=> movie.id === action.payload.id)
            if(!checkIfMovieInState){
          state.movies = [...state.movies, action.payload]
            } 
      state.moviesLoaded = true;
      state.moviesError = "";
    });
    // .addCase(getMovies.error, (state, action) => {
    //     state.movies = "";
    //     state.moviesLoaded = true;
    //     state.moviesError = error;
    //   });
  },
});

export default NetflixSlice.reducer;

