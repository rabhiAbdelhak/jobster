import { toast } from "react-toastify";
import { axiosfetch } from "../../util/axios";
import { getAlljobs, hideLoading, showLoading } from "../alljobs/alljobsSlice";
import { logoutUser } from "../user/userSlice";
import { clearJobValues } from "./jobSlice";


export const thunkAddJob = async (url , job, thunkApi) => {
    try {
        const { data: createdJob } = await axiosfetch.post(url, job);
        thunkApi.dispatch(clearJobValues());
        return createdJob;
      } catch (err) {
          let  message = '';
          if(isUnAuthorized(err.response)){
             message = 'UnAuthorized action!';
             toast.error(message);
             thunkApi.dispatch(logoutUser());     
          }
        return thunkApi.rejectedWithValue(message);
      }
}

export const thunkDeleteJob = async (url ,jobId, thunkApi) => {
  thunkApi.dispatch(showLoading());
    try {
      const {data} = await axiosfetch.delete('/jobs/'+jobId)
      thunkApi.dispatch(getAlljobs());
      return data
    } catch (err) {
      let  message = '';
          if(isUnAuthorized(err.response)){
             message = 'UnAuthorized action!';
             toast.error(message);
             thunkApi.dispatch(logoutUser());     
          }
        return thunkApi.rejectedWithValue(message);
    }
}

export const thunkEditJob = async (url ,{ jobId, job }, thunkApi) => {
    try {
      const {data} = await axiosfetch.patch('/jobs/'+jobId,job)
      thunkApi.dispatch(clearJobValues());
      return data
    } catch (err) {
      let  message = '';
      if(isUnAuthorized(err.response)){
         message = 'UnAuthorized action!';
         toast.error(message);
         thunkApi.dispatch(logoutUser());     
      }else{
        message = err.response.data.msg;
      }

    return thunkApi.rejectedWithValue(message);
    }
}

const isUnAuthorized = (response) => {
    return response.status === 401
}