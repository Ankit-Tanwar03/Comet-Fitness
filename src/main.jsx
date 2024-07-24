import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import GalleryPage from "./Pages/GalleryPage.jsx";
import Schedule from "./Pages/Schedule.jsx";
import Blog from "./Pages/Blog.jsx";
import PricingPage from "./Pages/PricingPage.jsx";
import ClassesPage from "./Pages/ClassesPage.jsx";
import Contact from "./Pages/Contact.jsx";
import SignUp from "./Pages/Signup.jsx";
import SignIn from "./Pages/Signin.jsx";

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
        element: <AboutPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
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
        element: <PricingPage />,
      },
      {
        path: "classes",
        element: <ClassesPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
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
