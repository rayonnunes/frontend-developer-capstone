import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, Home, Restaurant, BookTable, Confirmation } from "../pages";
import { getParams } from "./loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurants/:id",
        element: <Restaurant />,
        loader: getParams,
      },
      {
        path: "/restaurants/:id/book-table",
        element: <BookTable />,
        loader: getParams,
      },
      {
        path: "/restaurants/:id/book-table/confirmation",
        element: <Confirmation />,
        loader: getParams,
      },
    ],
  },
]);

export function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
