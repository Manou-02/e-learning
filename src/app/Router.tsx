import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "../modules/about/page";
import { ProtectedRoutes } from "./ProtectedRoutes";

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
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const { HomePage } = await import("@modules/home/page");
          return { Component: HomePage };
        },
      },
      {
        path: "/about",
        lazy: async () => {
          const { AboutPage } = await import("@modules/about/page");
          return { Component: AboutPage };
        },
      },
    ],
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);
