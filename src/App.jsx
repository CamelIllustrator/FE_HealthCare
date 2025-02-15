import { Route, Routes } from "react-router-dom";
import Footer from "./components/organisms/Footer";
import Header from './components/organisms/Header';
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";
import SignIn from "./pages/Auth/SignIn";
import SignUpInstitution from "./pages/Auth/SignUpInstitution";
import SignUpParent from "./pages/Auth/SignUpParent";
import QuisionerPage from "./pages/HomePage/Admin/QuisionerPage";
import { ParentHomePage } from "./pages/HomePage/Parent/ParentHomePage";
import { LandingPage } from "./pages/Landing Page/LandingPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import FamilyFormPage from "./pages/ProfilePage/FamilyFormPage";
import FillSelfProfilePage from "./pages/ProfilePage/FillSelfProfilePage";
import ProfileFormPage from "./pages/ProfilePage/ProfileFormPage";
import CreateNutritionPage from "./pages/Quisioner/CreateNutritionPage";

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
            <Route path="admin" element={<QuisionerPage />} />
            <Route path="admin/quisioner" element={<QuisionerPage />} />
            <Route path="admin/quisioner/create/nutrition" element={<CreateNutritionPage />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<SignIn />} />
            <Route path="register/parent" element={<SignUpParent />} />
            <Route path="register/institution" element={<SignUpInstitution />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!accessToken && (
        <Footer />
      )}
    </>
  );
}

export default App;
