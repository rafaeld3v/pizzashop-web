import "./global.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
