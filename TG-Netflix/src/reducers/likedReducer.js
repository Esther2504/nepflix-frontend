import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    likedMovies: localStorage.getItem("likedMovies")
    ? JSON.parse(localStorage.getItems("likedMovies"))
    : []
};

const likedSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {

        addToList(state,action) {
            const checkMovieInState = state.likedMovies.find((movie)=> movie.id ===action.payload.id)
            if(!checkMovieInState){
                state.likedMovies = [...state.likedMovies, action.payload]
            }  
        },
    },  
});

export const { addToList } = likedSlice.actions;
export default likedSlice.reducer;