import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosfetch } from "../../util/axios";
import { getAlljobsThunk, getStatsThunk } from "./alljobsThunk";


const initialFilterState = {
  search : '',
  filterStatus : 'all',
  filterType : 'all',
  filterSort : 'latest',
  filterSortOptions : ['latest', 'oldest', 'a-z', 'z-a']
}

const initialState = {
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  error: null,
  isLoading: false,
  stats: {},
  monthlyApplications : [],
  ...initialFilterState,
};

export const getAlljobs = createAsyncThunk(
  "alljobs/getAlljobs",
  async (_, thunkApi) => getAlljobsThunk(_, thunkApi)
);

export const getStats = createAsyncThunk('alljobs/getStats', async (_, thunkApi) => getStatsThunk(_, thunkApi))

const alljobsSlice = createSlice({
  name: "alljobs",
  initialState,
  reducers: {
    showLoading : (state) => {
      state.isLoading = true;
    },
    hideLoading : (state) => {
      state.isLoading = false;
    },
    handleFilterChange: (state, {payload : {name, value}}) => {
        state.page = 1;
        state[name] = value;
    },
    clearFilter : (state) => {
      return {...state, ...initialFilterState}
    },
    changePage : (state, {payload}) => {
      state.page = payload;
    },
    clearAlljobState:(state) => {
      return initialState;
    }
  },
  extraReducers: {
    [getAlljobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAlljobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
      state.totalJobs = payload.totalJobs;
      state.numOfPages = payload.numOfPages
    },
    [getAlljobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log('can\'t fetch the data')
    },
    [getStats.pending]: (state) => {
      state.isLoading = true;
    },
    [getStats.fulfilled]: (state, { payload : {defaultStats, monthlyApplications}}) => {
      state.isLoading = false;
      state.stats = defaultStats;
      state.monthlyApplications = monthlyApplications;
    },
    [getStats.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

  },
});


export const {showLoading, hideLoading, handleFilterChange, clearFilter, changePage, clearAlljobState} = alljobsSlice.actions;
export default alljobsSlice.reducer;
