import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Schedule from "./Pages/Schedule.jsx";
import Blog from "./Pages/Blog.jsx";
import Pricing from "./Pages/Pricing.jsx";
import Classes from "./Pages/Classes.jsx";
import Contact from "./Pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
