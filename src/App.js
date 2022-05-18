import { Error, Landing, Register } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SharedLayout from "./pages/SharedLayout";
import "react-toastify/dist/ReactToastify.css";
import {AllJobs, Profile, Stats, ProtectedRoute } from "./pages/dashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlljobs } from "./features/alljobs/alljobsSlice";

function App() {
  const dispatch = useDispatch();
  const {numOfPages, page, search, filterStatus, filterType} = useSelector(store => store.alljobs);
  const {user} = useSelector(store => store.user)
  useEffect(() => {
    dispatch(getAlljobs());
  }, [page, search, filterStatus, filterType, user]);
  return (
    <>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" exact element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
          <Route path="" exact element={<Stats/>}/>
          <Route path="all-jobs" element={<AllJobs/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
