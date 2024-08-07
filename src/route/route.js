import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Home from "../pages/home/home";
import Hotel from "../pages/hotel/hotel";
import Layout from "../layout/layout";
import List from "../pages/list/list";
import Login from "../pages/login/login"
  
  // You can do this:
 export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="hotels" element={<List/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Route>
    )
  );
  // export const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "stays",
  //     element: <Hotel />,
  //   },
  // ]);
  
