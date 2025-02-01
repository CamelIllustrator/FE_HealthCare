import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import App from "../App";

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith("/auth");

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        {!hideHeaderFooter && <Header />}
        <App />
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
