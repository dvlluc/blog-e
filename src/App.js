import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="*" element={<Navigate to="/posts" replace />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
