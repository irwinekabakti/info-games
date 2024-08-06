import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "@/constant";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncCreators = createAsyncThunk<any, number>(
  "developers/fetch",
  async (page = 1) => {
    const { data } = await axios.get<any>(
      `${apiURL.creatorsURL}?${API_KEY}&page=${page}`
    );
    return data;
  }
);
