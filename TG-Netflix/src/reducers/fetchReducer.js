import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//When calling on data from browse and movies, useSelector should be used on the page it's being called;
//const browse = useSelector(state => state.browse;
//const movie = useSelector(state => state.movie;
//Map each in there respective locations. Remove props passed in components

const initialState = {
  browse: [
    // banner = {},
    // categories = []
  ],
  browseLoaded: false,
  browseError: "",

  // scroll: [],

  movies: [],
  moviesLoaded: false,
  moviesError: "",
};

//The two axios links can be replaced with the link recieved from the back-end IF the initial endpoints stay as is.
export const getBrowse = createAsyncThunk(
  "netflix/browse",
  async ({ banner, categories, page }) => {
    console.log(banner, categories, page);
    //fetches /Browse data
    const { data } = await axios.get(
      `https://tg-nepflix.azurewebsites.net/browse`,
      { params: { banner, categories, page } }
    );
    const browse = data;
    console.log(browse);
    return browse;
  }
);

export const getMovies = createAsyncThunk("netflix/movies", async () => {
  //fetches /movie data
  const { data } = await axios.get(
    `https://stoplight.io/mocks/tg-maxserve/netclone/102025768/movie`
  );
  const movie = data;
  // console.log(movie);
  return movie;
});

//Added Error casses. Redirect Error to 404 Page component??
const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  //   reducers: {
  //     scrollReducer(state, action) {
  //       const previous = state.browse
  //         state.scroll = previous + action.payload;
  //     },
  // },

  //make reducers to set browse and movie states
  extraReducers: (builder) => {
    //this is when the  /browse data has been fully fetched
    builder.addCase(getBrowse.fulfilled, (state, action) => {
      const categorypayload = action.payload.categories;
      const bannerpayload = action.payload.banner;

      // state.browse = [];
      // console.log(state.browse)
      if (state.browse == [] || state.browse.length == 0) {
        // state.browse = []
        // state.browse.push(categorypayload, bannerpayload);
        state.browse = [categorypayload, bannerpayload];
      } else {
        // state.browse[0].push("test")
        for (let i = 0; i < categorypayload.length; i++) {
          const found = state.browse[0].find(
            (element) => element == categorypayload[i]
          );
          console.log(!found);
          if (!found) {
            // state.browse[0].push("test")
            state.browse[0].push(categorypayload[i])
            // state.browse.categories.push(action.payload.categories[i]);
            // state.browse.categories += action.payload.categories
          }
        }
      }

        // state.browse.push(categorypayload, bannerpayload);
      // }

      // else {
      //   if (action.payload.banner) state.browse.banner = action.payload.banner
      //   if (action.payload.categories) state.browse.categories.push(action.payload.categories)
      // }
      console.log(state.browse[0]);

      // state.browse.banner = {};
      // if (action.payload.banner) state.browse.banner = action.payload.banner

      // if (action.payload.categories) state.browse.categories = action.payload.categories

      // if (state.browse.categories == undefined) state.browse.categories = action.payload.categories

      //       console.log(state.browse.categories)

      //       for (let i = 0; i < action.payload.categories.length; i++) {

      //         const found = state.browse.categories.find((element) => element == action.payload.categories[i])
      //         console.log(!found)
      //         if (!found) {
      //           state.browse.categories.push(action.payload.categories[i])
      // // state.browse.categories += action.payload.categories
      //         }

      //       }
      // action.payload.categories

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
      state.movies = action.payload;
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

export const { scrollReducer } = NetflixSlice.actions;
export default NetflixSlice.reducer;
