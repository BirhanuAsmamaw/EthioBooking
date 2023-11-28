import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Home from "../pages/home/home";
import List from "../pages/list/list";
import Hotel from "../pages/hotel/hotel";
  
  // You can do this:
 export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>}/>
        <Route path="hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </>
    )
  );
  
