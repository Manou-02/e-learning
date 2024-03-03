import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { AboutPage } from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "*",
    lazy: async () => {
      const { NotFound } = await import("../pages/not-found");
      return { Component: NotFound };
    },
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);
