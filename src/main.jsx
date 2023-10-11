import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/contact.css";
import "./assets/styles/change_color.css";
import "./assets/styles/change_langue.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Projects from "./routes/Projects.jsx";

const router = createBrowserRouter([
  { path: "/Portfolio/", element: <Home />},
  { path: "/Portfolio/Projects", element: <Projects /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
