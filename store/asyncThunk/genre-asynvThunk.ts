import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "@/constant";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncGenres = createAsyncThunk<any, number | undefined>(
  "genres/fetch",
  async (page = 1) => {
    const { data } = await axios.get<any>(
      `${apiURL.genresURL}?${API_KEY}&page=${page}`
    );
    return data;
  }
);
