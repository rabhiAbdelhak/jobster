import { axiosfetch } from "../../util/axios";
import { logoutUser } from "./userSlice";

//register user

const thunkRegisterUser = async (url, user, thunkApi) => {
  try {
    const { data: authenticatedUser } = await axiosfetch.post(url, user);
    return authenticatedUser;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.msg);
  }
};

const thunkLoginerUser = async (url, user, thunkApi) => {
  try {
    const { data: AuthenticatedUser } = await axiosfetch.post(url, user);
    return AuthenticatedUser;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.msg);
  }
};

const thunkUpdateUser = async (url, user, thunkApi) => {
  try {
    const { data: updatedUser } = await axiosfetch.patch(
      url,
      user,
      {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      }
    );

    return updatedUser;
  } catch (err) {
    let message = "";
    console.log(err.response.status);
    if (err.response.status === 401) {
      message = "UnAuthorized, Loging out ! ";
      thunkApi.dispatch(logoutUser());
    } else {
      message = err.response.data.msg;
    }
    return thunkApi.rejectWithValue(message);
  }
};

export { thunkRegisterUser, thunkLoginerUser, thunkUpdateUser };
