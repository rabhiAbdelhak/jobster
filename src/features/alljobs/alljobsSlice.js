import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosfetch } from "../../util/axios";

const initialState = {
  jobs: [],
  total_jobs: 0,
  numOfPages: 1,
  page: 1,
  error: null,
  isLoading: false,
};

export const getAlljobs = createAsyncThunk(
  "alljobs/getAlljobs",
  async (_, thunkApi) => {
    try {
      const { data: jobs } = await axiosfetch("/jobs");
      return jobs;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const alljobsSlice = createSlice({
  name: "alljobs",
  initialState,
  reducers: {
    showLoading : (state) => {
      state.isLoading = true;
    },
    hideLoading : (state) => {
      state.isLoading = false;
    }
  },
  extraReducers: {
    [getAlljobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAlljobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
      state.total_jobs = payload.totalJobs;
      state.numOfPages = payload.numOfPages
    },
    [getAlljobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload, "error");
    },
  },
});


export const {showLoading, hideLoading} = alljobsSlice.actions;
export default alljobsSlice.reducer;
