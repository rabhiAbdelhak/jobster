import { toast } from "react-toastify";
import { logoutUser } from "../features/user/userSlice"



export const checkAuth = (response, thunkApi) => {
    if(response.status === 401 ) {
        thunkApi.dispatch(logoutUser());
        toast.error('Session expired Or user Unauthorized...')
        return
    }
}