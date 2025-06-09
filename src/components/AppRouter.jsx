import { useRoutes } from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
  return useRoutes(routes);
};

export default AppRouter;
