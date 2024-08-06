import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import {
  fetchAsyncStores,
  fetchAsyncStoresDetails,
} from "../asyncThunk/store-asyncThunk";

const initialState = {
  stores: [],
  storesStatus: STATUS.IDLE,
  storesSingle: [],
  storesSingleStatus: STATUS.IDLE,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncStores.pending, (state: any, action) => {
      state.storesStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncStores.fulfilled, (state: any, action) => {
      state.stores = action.payload;
      state.storesStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncStores.rejected, (state: any, action) => {
      state.storesStatus = STATUS.FAILED;
    });

    builder.addCase(fetchAsyncStoresDetails.pending, (state: any, action) => {
      state.storesSingleStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncStoresDetails.fulfilled, (state: any, action) => {
      state.storesSingle = action.payload;
      state.storesSingleStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncStoresDetails.rejected, (state: any, action) => {
      state.storesSingleStatus = STATUS.FAILED;
    });
  },

  reducers: {},
});

export const selectAllStores = (state: any) => state.store.stores.results;
export const selectAllStoresStatus = (state: any) => state.store.storesStatus;
export const selectSingleStore = (state: any) => state.store.storesSingle;
export const selectSingleStoreStatus = (state: any) =>
  state.store.storesSingleStatus;

export default storeSlice.reducer;

/*
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "@/constant";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncStores = createAsyncThunk("stores/fetch", async () => {
  const { data } = await axios.get(`${apiURL.storesURL}?${API_KEY}`);
  return data;
});

export const fetchAsyncStoresDetails = createAsyncThunk(
  "stores/details/fetch",
  async (id) => {
    const { data } = await axios.get(`${apiURL.storesURL}/${id}?${API_KEY}`);
    return data;
  }
);
*/
