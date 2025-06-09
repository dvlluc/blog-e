import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import "./styles/App.css";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";
import { IS_AUTH } from "./constants";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(IS_AUTH)) {
      setIsAuth(true);
    }
    setIsLoadingAuth(false);
  }, []);

  const logIn = () => {
    setIsAuth(true);
    localStorage.setItem(IS_AUTH, "true");
  };

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem(IS_AUTH);
  };

  return (
    <AuthContext.Provider value={{ isAuth, isLoadingAuth, logIn, logOut }}>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
