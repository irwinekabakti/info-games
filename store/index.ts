import { configureStore } from "@reduxjs/toolkit";
import creatorReducer from "./action/creator-slice";
import gameReducer from "./action/game-slice";
import genreReducer from "./action/genre-slice";
import sidebarReducer from "./action/sidebar-slice";
import storeReducer from "./action/store-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    creator: creatorReducer,
    game: gameReducer,
    genre: genreReducer,
    sidebar: sidebarReducer,
    store: storeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
