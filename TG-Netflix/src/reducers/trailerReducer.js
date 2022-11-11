import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seconds: 0,
}

export const TrailerSlice = createSlice({
    name: 'trailer',
    initialState,
    reducers: {
        setTrailerTime: (state, action) => {
            console.log("trailer time: " + action.payload)
            console.log(action.payload)
            state.seconds = action.payload.seconds;
        }
    }
}
)

export const { getCurrentTime, setTrailerTime } = TrailerSlice.actions;

export default TrailerSlice.reducer;