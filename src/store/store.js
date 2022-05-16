import { configureStore } from "@reduxjs/toolkit";

//local imports
import userReducer from '../features/user/userSlice';
import componentReducer from "../features/component/componentSlice";
import jobReducer from "../features/job/jobSlice";
import alljobsReducer from "../features/alljobs/alljobsSlice";


const store = configureStore({
    reducer : {
           user : userReducer,
           component : componentReducer,
           job: jobReducer,
           alljobs: alljobsReducer,
    }
})

export default store;