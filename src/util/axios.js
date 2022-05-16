import axios from "axios";
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
})