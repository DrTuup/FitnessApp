import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./views/Landingpage";
import { RouterProvider } from "react-router";
import WorkoutsListView from "./views/WorkoutsListView";
import { AddWorkoutView } from "./views/AddWorkoutView";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/workouts",
    element: <WorkoutsListView />,
  },
  {
    path: "/addworkout",
    element: <AddWorkoutView />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
