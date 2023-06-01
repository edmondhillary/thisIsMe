import { Navigate, Route, useRoutes } from "react-router-dom";
import App from "./App";
import ContactForm from "./components/Contact/ContactForm";

import Portfolio from "./Portfolio";
import WebDeveloper from "./components/WebDeveloper/WebDeveloper";
import Audiovisuals from "./components/Audiovisuals/Audiovisuals";

export const Routes = () => {
  return useRoutes([
    {
      element: <Portfolio />,
      path: "/",
    },

    {
      element: <WebDeveloper />,
      path: "/dev",
    },

    {
        element: <Audiovisuals />,
        path: "/audiovisuals",
      },
    {
        element: <Navigate to="/empleados" replace />,
        path: "/*",
      },
   
  ]);
};
