// src/Routes.js
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from '../src/components/Home';
  import Header from '../src/components/Header';

const router = createBrowserRouter([
    {
      path: "/",
      element: Home,
    },
  ]);

export default router;
