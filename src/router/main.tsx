import { createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, Industries, ServicesPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "services",
    element: <ServicesPage />,
  },
  {
    path: "industries",
    element: <Industries />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
]);
