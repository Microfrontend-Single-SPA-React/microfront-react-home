import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

export default function Root(props) {
  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
}
