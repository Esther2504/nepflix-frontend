import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seconds: 0,
}

export const TrailerSlice = createSlice({
    name: 'trailer',
    initialState,
    reducers: {
        setTrailerTime: (state, action) => {
            console.log(action.payload);
            state.seconds = action.payload;
        }
    }
}
)

export const { getCurrentTime, setTrailerTime } = TrailerSlice.actions;

export default TrailerSlice.reducer;