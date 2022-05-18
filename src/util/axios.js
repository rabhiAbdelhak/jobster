import axios from "axios";
import { clearStore } from "../features/user/userSlice";
import { getUserFromLocalStorage } from "./localStorage";



export const axiosfetch = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

axiosfetch.interceptors.request.use(config => {
    const user = getUserFromLocalStorage();

    if(user) {
        config.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
},
(error) => {
    return Promise.reject(error);
});

export const  chechUserAuthorization = (response, thunkApi) => {
     if(response.status === 401){
         console.log(response.status)
         thunkApi.dispatch(clearStore());
         return thunkApi.rejectWithValue('UnAuthorized, Loging out ...');
     }else{
         return thunkApi.rejectWithValue(response.data.msg);
     }
}
