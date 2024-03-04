import { createBrowserRouter } from "react-router-dom";
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
        path: "/catalogue",
        lazy: async () => {
          const { CataloguePage } = await import("@modules/catalogue/page");
          return { Component: CataloguePage };
        },
      },
      {
        path: "/learn-space",
        lazy: async () => {
          const { LearnSpacePage } = await import("@modules/learn-space/page");
          return { Component: LearnSpacePage };
        },
      },
    ],
  },
  {
    path: "/login",
    lazy: async () => {
      const { Login } = await import("../modules/auth/login/Login");
      return { Component: Login };
    },
  },
]);
