import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGenres } from "../asyncThunk/genre-asynvThunk";

const initialState = {
  genres: [],
  genresStatus: STATUS.IDLE,
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGenres.pending, (state: any, action) => {
      state.genresStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncGenres.fulfilled, (state: any, action) => {
      state.genres = action.payload;
      state.genresStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncGenres.rejected, (state: any, action) => {
      state.genresStatus = STATUS.FAILED;
    });
  },
  reducers: {},
});

export const selectAllGenres = (state: any) => state.genre.genres.results;
export const selectAllGenresStatus = (state: any) => state.genres.genresStatus;
export default genreSlice.reducer;
