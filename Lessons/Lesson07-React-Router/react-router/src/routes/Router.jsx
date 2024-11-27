import AboutView from "../views/AboutView";
import HomeView from "../views/HomeView";
import { useRoutes } from "react-router-dom";
import ParameterView from "../views/ParameterView";
import NewsView from "../views/NewsView";
import TrendingNewsView from "../views/TrendingNewsView";
import SportsNewsView from "../views/SportsNewsView";
import FinanceNewsView from "../views/FinanceNewsView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/about", element: <AboutView /> },
    { path: "/parameter/:id", element: <ParameterView /> },
    {
      path: "/news",
      element: <NewsView />,
      children: [
        { path: "trending", element: <TrendingNewsView /> },
        { path: "sports", element: <SportsNewsView /> },
        { path: "finance", element: <FinanceNewsView /> },
      ],
    },
  ]);

  return routes;
};

export default Router;
