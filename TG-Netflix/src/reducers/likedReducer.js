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
            const itemIndex = state.likedMovies.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >=0) {
                console.log('already in liked movies list');
            }
            else {
                const tempLiked = { ...action.payload, id};
                state.likedMovies.push(tempLiked);
            }
            localStorage.setItem("likedMovies", 
            JSON.stringify(state.likedMovies)
            );
        },

        //  no.. no need to remove from list :)


    },
    
});

export const { addToList } = likedSlice.actions;
export default likedSlice.reducer;