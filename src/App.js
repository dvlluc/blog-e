import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import About from "./pages/About";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
