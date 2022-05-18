import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../util/localStorage";
import { thunkAddJob, thunkDeleteJob, thunkEditJob } from "./jobThunk";

export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkApi) => {
    return thunkAddJob("/jobs", job, thunkApi);
  }
);

export const deleteJob = createAsyncThunk("job/deleteJob", (jobId, thunkApi) =>
  thunkDeleteJob("jobs/", jobId, thunkApi)
);

export const editJob = createAsyncThunk(
  "job/editJob",
  ({ jobId, job }, thunkApi) =>
  thunkEditJob("jobs/", { jobId, job }, thunkApi)
);

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: getUserFromLocalStorage()?.location || "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { value, name } = action.payload;
      state[name] = value;
    },
    clearJobValues: (state) => {
      return initialState;
    },
    getJobToEdit: (state, { payload }) => {
      return { ...state, ...payload, isEditing: true };
    },
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      toast.success("Job Created successfuly !");
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJob.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [deleteJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("job deleted successfuly !");
    },
    [deleteJob.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [editJob.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("job edited successfuly !");
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    }
  },
});

export const { handleChange, clearJobValues, getJobToEdit } = jobSlice.actions;

export default jobSlice.reducer;
