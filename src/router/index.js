import { Navigate } from "react-router-dom";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";

const commonRoutes = [
  {
    path: "*",
    element: <Error />,
  },
];

export const privateRoutes = [
  {
    path: "/",
    element: <Navigate to="/posts" replace />,
  },
  {
    path: "/login",
    element: <Navigate to="/posts" replace />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:id",
    element: <PostIdPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  ...commonRoutes,
];

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];
