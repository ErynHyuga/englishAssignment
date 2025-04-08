import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Assignment } from "./components/Pages/Assignment";
import { About } from "./components/Pages/About";
import { Home } from "./components/Pages/Home";

import ReactDOM from "react-dom/client";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/language",
    element: <Assignment />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
