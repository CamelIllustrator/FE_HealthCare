import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/Auth/SignIn";
import SignUpParent from "./pages/Auth/SignUpParent";
import SignUpInstitution from "./pages/Auth/SignUpInstitution";
import { LandingPage } from "./pages/Landing Page/LandingPage";
import Header from './components/organisms/Header';
import Footer from "./components/organisms/Footer";
import { ParentHomePage } from "./pages/HomePage/Parent/ParentHomePage";
import FillSelfProfilePage from "./pages/ProfilePage/FillSelfProfilePage";
import ProfileFormPage from "./pages/ProfilePage/ProfileFormPage";
import FamilyFormPage from "./pages/ProfilePage/FamilyFormPage";

function App() {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <>
      {!accessToken && (
        <Header />
      )}
      <main>
        <Routes>
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/dashboard" element={<HomeLayout />}>
            <Route path="" element={<ParentHomePage />} />
            <Route path="parent" element={<h1>Test2</h1>} />
            <Route path="parent/profile" element={<FillSelfProfilePage />} />
            <Route path="parent/profile/create" element={<ProfileFormPage buttonType={"SUBMIT"} />} />
            <Route path="parent/family/create" element={<FamilyFormPage />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<SignIn />} />
            <Route path="register/parent" element={<SignUpParent />} />
            <Route path="register/institution" element={<SignUpInstitution />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
      {!accessToken && (
        <Footer />
      )}
    </>
  );
}

export default App;
