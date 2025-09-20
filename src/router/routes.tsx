import { createBrowserRouter, Navigate } from "react-router-dom";

import PrivateLayout from "@/component/layout/privateLayout";
import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import Blogs from "@/pages/blogs";
import Reads from "@/pages/reads";
import Daily from "@/pages/daily";
import AuthGuard from "@/router/authGuard";
import { ROUTES } from "@/utils/constants";

const router = createBrowserRouter([
  {
    path: ROUTES.AUTH.LOGIN,
    element: <Login />,
  },

  {
    path: ROUTES.ROOT,
    element: <AuthGuard />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          { path: "", element: <Navigate to={ROUTES.HOME} replace /> },
          { path: ROUTES.HOME.replace("/", ""), element: <Home /> },
          { path: ROUTES.BLOGS.replace("/", ""), element: <Blogs /> },
          { path: ROUTES.READS.replace("/", ""), element: <Reads /> },
          { path: ROUTES.DAILY.replace("/", ""), element: <Daily /> },
          { path: "*", element: <Navigate to={ROUTES.HOME} replace /> },
        ],
      },
    ],
  },
]);

export default router;
