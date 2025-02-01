import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/Layout";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Router>
    <ToastContainer />
    <Layout />
  </Router>
);
