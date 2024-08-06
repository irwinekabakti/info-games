import { configureStore } from "@reduxjs/toolkit";
import creatorReducer from "./action/creator-slice";
import gameReducer from "./action/game-slice";
import genreReducer from "./action/genre-slice";
import sidebarReducer from "./action/sidebar-slice";
import storeReducer from "./action/store-slice";

const store = configureStore({
  reducer: {
    creator: creatorReducer,
    game: gameReducer,
    genre: genreReducer,
    sidebar: sidebarReducer,
    store: storeReducer,
  },
});

export { store };
