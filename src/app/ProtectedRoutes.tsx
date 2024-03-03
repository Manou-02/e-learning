// import { useStore } from "react-redux";
// import { Navigate } from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";

export const ProtectedRoutes = () => {
  //   const hasToken = (useStore().getState() as any)?.profileUser?.token;
  //   return hasToken ? BaseLayout : <Navigate to="/login" replace />;
  return BaseLayout;
};
