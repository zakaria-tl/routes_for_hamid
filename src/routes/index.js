import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import IndexLayout from "../components/IndexLayout";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import NotFound from "../components/NotFound";

export default function APP_ROUTES() {
    const isAuthenticateed = () => {
        return true
    }

  return (
    <Routes>
      
      <Route path="/signin" element={!isAuthenticateed() ? <SignIn /> : <Navigate to="/" />} />
      <Route path="/signup" element={!isAuthenticateed() ? <SignUp /> : <Navigate to="/" />} />

      <Route path="/" element={ isAuthenticateed() ? <IndexLayout /> : <Navigate to="/signin" />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NotFound />} />
      </Route>

    </Routes>
  );
}