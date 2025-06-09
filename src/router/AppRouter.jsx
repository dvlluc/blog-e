import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      {/* <Route path="*" element={<Navigate to="/posts" replace />} /> */}
    </Routes>
  );
};

export default AppRouter;
