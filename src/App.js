import { Error, Landing, Register } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SharedLayout from "./pages/SharedLayout";
import "react-toastify/dist/ReactToastify.css";
import { AddJob, AllJobs, Profile, Stats, ProtectedRoute } from "./pages/dashboard";

function App() {

  return (
    <>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" exact element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
          <Route path="" exact element={<Stats/>}/>
          <Route path="all-jobs" element={<AllJobs/>}/>
          <Route path="add-job" element={<AddJob/>}/>
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
