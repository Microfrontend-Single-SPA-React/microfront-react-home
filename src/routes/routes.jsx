import { createBrowserRouter } from "react-router-dom";
import index from "../views";
import ErrorPage from "../components/error-page";
import NotesView from "../views/notes";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: index,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notes",
    Component: NotesView,
    errorElement: <ErrorPage />,
  },
]);
