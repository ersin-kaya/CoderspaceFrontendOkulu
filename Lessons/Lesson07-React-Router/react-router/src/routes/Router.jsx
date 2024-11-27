import AboutView from "../views/AboutView";
import HomeView from "../views/HomeView";
import { useRoutes } from "react-router-dom";
import ParameterView from "../views/ParameterView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/about", element: <AboutView /> },
    { path: "/parameter/:id", element: <ParameterView /> },
  ]);

  return routes;
};

export default Router;
