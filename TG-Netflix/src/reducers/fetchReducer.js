import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    browse: [],
    browseLoaded: false,
    browseError: '',

    movies: [],
    moviesLoaded: false,
    moviesError: '',
};


export const getBrowse = createAsyncThunk("netflix/browse", async () => {
    //fetches /Browse data
    const {
        data,
    } = await axios.get(`https://stoplight.io/mocks/tg-maxserve/netclone/102025768/browse`);
    const browse = data;

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
            state.browse = action.payload;
            state.browseLoaded = true;
            state.browseError = '';
        })
        //can do .addCase to set other status to the same builder, such ass; Pending and Error
        //this is when the /movie has been fully fetched
        builder.addCase(getMovies.fulfilled, (state, action) => {
            const checkIfMovieInState = state.movies.find((movie)=> movie.id === action.payload.id)
            if(!checkIfMovieInState){
                state.movies = [...state.movies, action.payload]
            } 
            console.log(state);
            state.moviesLoaded = true;
            state.moviesError = '';
        });

    },
});


export default NetflixSlice.reducer;