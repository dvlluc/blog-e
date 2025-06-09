import { useRoutes } from "react-router-dom";
import { routes } from ".";

const AppRouter = () => {
  return useRoutes(routes);
};

export default AppRouter;
