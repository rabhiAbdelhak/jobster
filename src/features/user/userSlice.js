import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosfetch } from "../../util/axios";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  removeUserFomLocalStorage,
  getUserFromLocalStorage,
  getStatusFromLocalStorage,
} from "../../util/localStorage";
import {
  thunkRegisterUser,
  thunkLoginerUser,
  thunkUpdateUser,
} from "./userThunk";

export const loginUser = createAsyncThunk(
  "user/loginUser", 
  (user, thunkApi) => thunkRegisterUser("/auth/login", user, thunkApi)
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  (user, thunkApi) => thunkLoginerUser("auth/register", user, thunkApi)
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  (user, thunkApi) => thunkUpdateUser("/auth/updateUser", user, thunkApi)
);

const initialState = {
  user: getUserFromLocalStorage() || {},
  isAuth: getStatusFromLocalStorage(),
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      removeUserFomLocalStorage();
      toast.warning('Loging Out');
      state.isAuth = false;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload: { user } }) => {
      state.user = user;
      addUserToLocalStorage(user);
      state.isLoading = false;
      state.isAuth = true;
      toast.success("You are connected : " + user.name);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload: { user } }) => {
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      state.isAuth = true;
      toast.success(
        "You have been Registered successfuly !, Welcome to Job ster"
      );
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload: { user } }) => {
      state.isLoading = false;
      toast.success("User Updated");
      addUserToLocalStorage(user);
      state.user = user;
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
