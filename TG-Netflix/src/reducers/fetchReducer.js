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
    console.log(banner, categories, page)
    //fetches /Browse data
    const { data } = await axios.get(
        `https://tg-nepflix.azurewebsites.net/browse`, { params: { banner, categories, page } }
    );
    const browse = data;

    return browse;
});

export const getMovies = createAsyncThunk("netflix/movies", async () => {
    //fetches /movie data
    const { data } = await axios.get(
        `https://stoplight.io/mocks/tg-maxserve/netclone/102025768/movie`
    );
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
            // state.browse = action.payload;
          const categorypayload = action.payload.categories;
          const bannerpayload = action.payload.banner;
            if (state.browse == [] || state.browse.length == 0) {
              state.browse = [categorypayload, bannerpayload];
            } else {
              for (let i = 0; i < categorypayload.length; i++) {
                const found = state.browse[0].find(
                  (element) => element == categorypayload[i]
                );
                // console.log(!found);
                if (!found) {
                  state.browse[0].push(categorypayload[i])
                }
              }
            }
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

    },
});

export default NetflixSlice.reducer;

