import { createBrowserRouter } from "react-router-dom";
import index from "../views";
import ErrorPage from "../components/error-page";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: index,
    errorElement: <ErrorPage />,
  },
]);
