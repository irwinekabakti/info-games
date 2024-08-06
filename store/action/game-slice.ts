import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import {
  fetchAsyncGameDetails,
  fetchAsyncGames,
} from "../asyncThunk/game-asyncThunk";

const initialState = {
  games: [],
  gamesStatus: STATUS.IDLE,
  gamesSingle: [],
  gamesSingleStatus: STATUS.IDLE,
  gamesDetails: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGames.pending, (state: any, action) => {
      state.gamesStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncGames.fulfilled, (state: any, action) => {
      state.games = action.payload;
      state.gamesStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncGames.rejected, (state: any, action) => {
      state.gamesStatus = STATUS.FAILED;
    });

    builder.addCase(fetchAsyncGameDetails.pending, (state: any, action) => {
      state.gamesSingleStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncGameDetails.fulfilled, (state: any, action) => {
      state.gamesSingle = action.payload;
      state.gamesSingleStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncGameDetails.rejected, (state: any, action) => {
      state.gamesSingleStatus = STATUS.FAILED;
    });
  },

  reducers: {},
});

export const selectAllGames = (state: any) => state.game.games.results;
export const selectAllGamesStatus = (state: any) => state.game.gamesStatus;
export const selectGamesNextPage = (state: any) => state.game.games.next;
export const selectGamesPrevPage = (state: any) => state.game.games.previous;
export const selectSingleGame = (state: any) => state.game.gamesSingle;
export const selectSingleGameStatus = (state: any) =>
  state.game.gamesSingleStatus;
export const selectGamesDetails = (state: any) => state.game.gamesDetails;

export default gameSlice.reducer;
