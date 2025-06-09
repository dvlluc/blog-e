import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace/>} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );

  // return useRoutes([
  //   {
  //     path: "posts",
  //     element: <Posts />,
  //   },
  //   {
  //     path: "posts:id",
  //     element: <PostIdPage />,
  //   },
  //   {
  //     path: "about",
  //     element: <About />,
  //   },
  //   {
  //     path: "*",
  //     element: <Error />,
  //     // element: <Navigate to="/posts" replace />,
  //   },
  // ]);
};

export default AppRouter;
