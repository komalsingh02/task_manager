import React from "react";
import Home from "./Pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />)
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
