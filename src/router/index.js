import { Navigate } from "react-router-dom";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Error from "../pages/Error";

export const routes = [
  {
    path: "/",
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
  {
    path: "*",
    element: <Error />,
  },
];
