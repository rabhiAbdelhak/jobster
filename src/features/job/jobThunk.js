import { axiosfetch, chechUserAuthorization } from "../../util/axios";
import { getAlljobs, showLoading } from "../alljobs/alljobsSlice";
import { clearJobValues } from "./jobSlice";


export const thunkAddJob = async (url , job, thunkApi) => {
    try {
        const { data: createdJob } = await axiosfetch.post(url, job);
        thunkApi.dispatch(clearJobValues());
        thunkApi.dispatch(getAlljobs());
        return createdJob;
      } catch (err) {
        chechUserAuthorization(err.response, thunkApi)
      }
}

export const thunkDeleteJob = async (url ,jobId, thunkApi) => {
  thunkApi.dispatch(showLoading());
    try {
      const {data} = await axiosfetch.delete('/jobs/'+jobId)
      thunkApi.dispatch(getAlljobs());
      return data
    } catch (err) {
      chechUserAuthorization(err.response, thunkApi)
    }
}

export const thunkEditJob = async (url ,{ jobId, job }, thunkApi) => {
    try {
      const {data} = await axiosfetch.patch('/jobs/'+jobId,job)
      thunkApi.dispatch(clearJobValues());
      thunkApi.dispatch(getAlljobs());
      return data
    } catch (err) {
      chechUserAuthorization(err.response, thunkApi)
    }
}

