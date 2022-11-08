import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { TbBuildingFortress } from "react-icons/tb";


const initialState = {
    browse: [],
    browseLoaded: false,
    browseError: '',

    movies: [],
    moviesLoaded: false,
    moviesError: '',

    liked: [],
    likedLoaded: false,
    likedError: '',
};


export const getBrowse = createAsyncThunk("netflix/browse", async () => {
    //fetches /Browse data
    const {
        data,
    } = await axios.get(`https://stoplight.io/mocks/tg-maxserve/netclone/102025768/browse`);
    const browse = data;

    return browse;
});


export const getMovies = createAsyncThunk("netflix/movies", async () => {
    //fetches /movie data
    const {
        data,
    } = await axios.get(`https://stoplight.io/mocks/tg-maxserve/netclone/102025768/movie`);
    const movie = data;

    return movie;
});


export const getLiked = createAsyncThunk("netflix/liked" , async () => {
    // fetches /user data
    const {
        data,
    } = await axios.get(`https://stoplight.io/mocks/nepflix/nepflix-user/105131026/user/liked`);
    const liked = data;
    // console.log(liked);
    return liked;
});


const NetflixSlice = createSlice({
    name: "netflix",
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
            state.movies = action.payload;
            state.moviesLoaded = true;
            state.moviesError = '';
        })
            
        builder.addCase(getLiked.fulfilled, (state, action) => {
            state.liked = action.payload;
            state.likedLoaded = true;
            state.likedError = '';
            // added user Reducer for My-list
        });

    },
});


export default NetflixSlice.reducer;