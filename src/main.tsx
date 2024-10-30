import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

import Home from "./pages/Home";
import AnimalDetails from "./pages/AnimalDetails";

import "./styles/main.css";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/animal/:id",
    element: <AnimalDetails />,
  },
];

const router = createBrowserRouter(routes);

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement) {
  const root: Root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
