import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { store } from "./store/store";
import { Provider } from "react-redux";

export default function Root(props) {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={routes} />
      </React.StrictMode>
    </Provider>
  );
}
