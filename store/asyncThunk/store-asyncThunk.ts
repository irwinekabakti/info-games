import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "@/constant";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncStores = createAsyncThunk<any, void>(
  "stores/fetch",
  async () => {
    const { data } = await axios.get<any>(`${apiURL.storesURL}?${API_KEY}`);
    return data;
  }
);

export const fetchAsyncStoresDetails = createAsyncThunk<any, string>(
  "stores/details/fetch",
  async (id) => {
    const { data } = await axios.get<any>(
      `${apiURL.storesURL}/${id}?${API_KEY}`
    );
    return data;
  }
);
