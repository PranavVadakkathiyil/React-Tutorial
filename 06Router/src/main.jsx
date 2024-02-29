import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Layout from "./component/Layout.jsx";
import User from "./component/User.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<Layout/>}>
      <Route  path="" element={<Home/>}/>
      <Route path="About" element={<About />} />
      <Route path="User/:userid" element={<User/>}/>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
