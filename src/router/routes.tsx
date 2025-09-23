import { createBrowserRouter, Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import PrivateLayout from "@/component/layout/privateLayout";
import Login from "@/pages/auth/login";
import Blogs from "@/pages/blogs";
import Reads from "@/pages/reads";
import Daily from "@/pages/daily";
import Landing from "@/pages/landing";
import AuthGuard from "@/router/authGuard";
import { ROUTES } from "@/utils/constants";

const routes: RouteObject[] = [
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
          { path: ROUTES.HOME.replace("/", ""), element: <Landing /> },
          { path: ROUTES.BLOGS.replace("/", ""), element: <Blogs /> },
          { path: ROUTES.READS.replace("/", ""), element: <Reads /> },
          { path: ROUTES.DAILY.replace("/", ""), element: <Daily /> },
          { path: "*", element: <Navigate to={ROUTES.HOME} replace /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
