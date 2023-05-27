import React from "react";
import ReactDOM from "react-dom/client";
import SearchNews from "./SearchNews.jsx";
import FilterSearch from "./FilterSearch.jsx";
import Chat from "./ChatGPT.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FilterSearch />,
  },
  {
    path: "/result/:keyword",
    element: <SearchNews />,
  },
  {
    path: "/ask",
    element: <Chat />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
