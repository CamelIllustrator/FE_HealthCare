import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/Auth/SignIn";
import SignUpParent from "./pages/Auth/SignUpParent";
import SignUpInstitution from "./pages/Auth/SignUpInstitution";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="register/parent" element={<SignUpParent />} />
        <Route path="register/institution" element={<SignUpInstitution />} />
      </Route>
    </Routes>
  );
}

export default App;
