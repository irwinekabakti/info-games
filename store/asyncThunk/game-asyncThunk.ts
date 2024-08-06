import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "@/constant";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncGames = createAsyncThunk<any, number>(
  "games/fetch",
  async (page = 1) => {
    const { data } = await axios.get<any>(
      `${apiURL.gamesURL}?${API_KEY}&page=${page}`
    );
    return data;
  }
);

export const fetchAsyncGameDetails = createAsyncThunk<any, string>(
  "game/details/fetch",
  async (id) => {
    const { data } = await axios.get<any>(
      `${apiURL.gamesURL}/${id}?${API_KEY}`
    );
    return data;
  }
);
