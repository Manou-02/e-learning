import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../modules/home/page";
import { AboutPage } from "../modules/about/page";

export const router = createBrowserRouter([
  {
    path: "*",
    lazy: async () => {
      const { NotFound } = await import("../modules/not-found/page");
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
