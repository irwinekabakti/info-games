import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncCreators } from "../asyncThunk/creator-asyncThunk";

const initialState = {
  creators: [],
  creatorsStatus: STATUS.IDLE,
};

const creatorSlice = createSlice({
  name: "creator",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCreators.pending, (state: any, action) => {
      state.creatorsStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncCreators.fulfilled, (state: any, action) => {
      state.creators = action.payload;
      state.creatorsStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncCreators.rejected, (state: any, action) => {
      state.creatorsStatus = STATUS.FAILED;
    });
  },

  reducers: {},
});

export const selectAllCreators = (state: any) => state.creator.creators.results;
export const selectAllCreatorsStatus = (state: any) =>
  state.creator.creatorsStatus;
export const selectCreatorsNextPage = (state: any) =>
  state.creator.creators.next;
export const selectCreatorsPrevPage = (state: any) =>
  state.creator.creators.previous;

export default creatorSlice.reducer;
