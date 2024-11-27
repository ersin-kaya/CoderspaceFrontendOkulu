import AboutView from "../views/AboutView";
import HomeView from "../views/HomeView";
import { useRoutes } from "react-router-dom";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/about", element: <AboutView /> },
  ]);

  return routes;
};

export default Router;
