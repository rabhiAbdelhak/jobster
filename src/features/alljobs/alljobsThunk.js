import { axiosfetch, chechUserAuthorization } from "../../util/axios";



export const getAlljobsThunk = async (_, thunkApi) => {
    const {page, search, filterStatus, filterType, filterSort} = thunkApi.getState().alljobs;
    let url = `/jobs?status=${filterStatus}&jobType=${filterType}&sort=${filterSort}&page=${page}`
    if(search) url += `&search=${search}`;

    try {
      const { data: jobs } = await axiosfetch(url);
      return jobs;
    } catch (err) {
        chechUserAuthorization(err.response, thunkApi);
    }
}

export const getStatsThunk = async (_, thunkApi) => {
    try{
        const {data} = await axiosfetch.get('/jobs/stats');
     
        return data
       }catch(err){
         chechUserAuthorization(err.response, thunkApi);
       }
}