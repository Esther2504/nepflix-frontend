import { createSlice } from "@reduxjs/toolkit";
import YouTube from "react-youtube";

const initialState = {
    seconds: 0,
}

export const TrailerSlice = createSlice({
    name: 'trailer',
    initialState,
    reducers: {
        getCurrentTime: (state) => {
            YouTubePlayer.getCurrentTime()
        },
        setCurrentTime: (state) => {
            YouTubePlayer.seekTo(
                seconds,
                allowSeekAhead = true)
        }
    }
}
)

export const { getCurrentTime, setCurrentTime } = TrailerSlice.actions;

export default TrailerSlice.reducer;