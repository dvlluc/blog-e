import { useRoutes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  const routes = isAuth ? privateRoutes : publicRoutes;
  return useRoutes(routes);
};

export default AppRouter;
